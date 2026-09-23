import React, { useState } from "react";
import { mockStore } from "../data/mockStore";

const CartDrawer = ({ isOpen, onClose, onNavigate }) => {
  const [cart, setCart] = useState(mockStore.getCart());
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [orderCompleted, setOrderCompleted] = useState(null);

  React.useEffect(() => {
    const unsubscribe = mockStore.subscribe(() => {
      setCart(mockStore.getCart());
    });
    return unsubscribe;
  }, []);

  if (!isOpen) return null;

  const totalAmount = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleQuantityChange = (productId, delta) => {
    mockStore.updateCartQuantity(productId, delta);
  };

  const handleRemoveItem = (productId) => {
    mockStore.removeFromCart(productId);
  };

  const handleCheckout = () => {
    if (cart.length === 0) return;
    setIsCheckingOut(true);
    setTimeout(() => {
      const order = mockStore.addOrder({
        items: [...cart],
        totalAmount,
        paymentMethod: "Direct Artisan UPI / Cash"
      });
      setIsCheckingOut(false);
      setOrderCompleted(order);
    }, 1200);
  };

  const handleCloseAll = () => {
    setOrderCompleted(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-sm flex justify-end animate-fadeIn">
      <div className="w-full max-w-md bg-[#fff8f1] h-full shadow-2xl flex flex-col justify-between border-l border-[#d7c2bd]">
        
        {/* Header */}
        <div className="p-6 bg-[#421b0f] text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-[#ffbe97] text-[24px]">local_mall</span>
            <div>
              <h2 className="font-serif text-xl font-bold">Your Artisan Cart</h2>
              <p className="font-sans text-[11px] text-[#ffdbd1]">100% Direct Remittance to Master Craftsmen</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/10 text-white transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Order Completed Success Modal Overlay */}
        {orderCompleted ? (
          <div className="p-8 flex-1 flex flex-col items-center justify-center text-center space-y-6 bg-white">
            <div className="w-20 h-20 rounded-full bg-[#E8F5E9] text-[#2E7D32] flex items-center justify-center text-4xl shadow-inner">
              ✓
            </div>
            <div className="space-y-2">
              <span className="font-sans text-xs uppercase tracking-widest text-[#845333] font-bold">Order Placed Successfully!</span>
              <h3 className="font-serif text-2xl font-bold text-[#421b0f]">Thank You for Preserving Living Heritage!</h3>
              <p className="font-serif text-xs text-[#524440] leading-relaxed max-w-xs mx-auto">
                Order <strong>#{orderCompleted.id}</strong> has been transmitted directly to the artisan. Total <strong>₹{orderCompleted.totalAmount.toLocaleString("en-IN")}</strong>.
              </p>
            </div>

            <div className="w-full p-4 rounded-2xl bg-[#fcf2e5] border border-[#d7c2bd] text-left space-y-2 font-sans text-xs">
              <div className="flex justify-between text-[#84736f]">
                <span>Artisan Remittance:</span>
                <strong className="text-[#2E7D32]">100% Direct to Artisan Bank</strong>
              </div>
              <div className="flex justify-between text-[#84736f]">
                <span>Dispatch Origin:</span>
                <strong className="text-[#421b0f]">Regional Artisan Cluster</strong>
              </div>
              <div className="flex justify-between text-[#84736f]">
                <span>Estimated Delivery:</span>
                <strong className="text-[#421b0f]">3 - 5 Business Days</strong>
              </div>
            </div>

            <div className="flex flex-col w-full gap-2 pt-4">
              <button
                onClick={() => {
                  handleCloseAll();
                  if (onNavigate) onNavigate("shop");
                }}
                className="w-full py-3.5 rounded-xl bg-[#421b0f] text-white font-sans text-xs font-bold shadow-md hover:bg-[#845333] transition-colors"
              >
                Explore More Crafts in Catalog
              </button>
            </div>
          </div>
        ) : (
          <>
            {/* Cart Items List */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-16">
                  <span className="material-symbols-outlined text-6xl text-[#d7c2bd]">shopping_bag</span>
                  <div className="space-y-1">
                    <h4 className="font-serif text-lg font-bold text-[#421b0f]">Your Cart is Empty</h4>
                    <p className="font-serif text-xs text-[#84736f] max-w-xs">
                      Discover authentic handcrafted treasures directly from verified master artisans.
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      onClose();
                      if (onNavigate) onNavigate("shop");
                    }}
                    className="px-6 py-2.5 rounded-xl bg-[#845333] text-white font-sans text-xs font-bold shadow-sm hover:bg-[#421b0f] transition-colors"
                  >
                    Browse Catalog
                  </button>
                </div>
              ) : (
                cart.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white p-4 rounded-2xl border border-[#d7c2bd] shadow-sm flex items-center gap-4 relative group"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 rounded-xl object-cover flex-shrink-0 bg-[#f6ede0]"
                    />
                    <div className="flex-1 min-w-0 space-y-1">
                      <h4 className="font-serif text-xs font-bold text-[#421b0f] truncate leading-snug">
                        {item.name}
                      </h4>
                      <p className="font-sans text-[11px] text-[#84736f]">
                        Crafted by <strong className="text-[#845333]">{item.artisan}</strong>
                      </p>
                      <div className="font-serif text-sm font-bold text-[#421b0f]">
                        {item.priceFormatted || `₹${item.price}`}
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-2 pt-1">
                        <button
                          onClick={() => handleQuantityChange(item.id, -1)}
                          className="w-6 h-6 rounded-md bg-[#f6ede0] hover:bg-[#d7c2bd] text-[#421b0f] font-sans text-xs font-bold flex items-center justify-center transition-colors"
                        >
                          -
                        </button>
                        <span className="font-sans text-xs font-bold text-[#421b0f] w-4 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => handleQuantityChange(item.id, 1)}
                          className="w-6 h-6 rounded-md bg-[#f6ede0] hover:bg-[#d7c2bd] text-[#421b0f] font-sans text-xs font-bold flex items-center justify-center transition-colors"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <button
                      onClick={() => handleRemoveItem(item.id)}
                      className="p-1.5 text-[#84736f] hover:text-red-700 transition-colors"
                      title="Remove item"
                    >
                      <span className="material-symbols-outlined text-[18px]">delete</span>
                    </button>
                  </div>
                ))
              )}
            </div>

            {/* Cart Footer */}
            {cart.length > 0 && (
              <div className="p-6 bg-white border-t border-[#d7c2bd] space-y-4">
                <div className="space-y-2 font-sans text-xs text-[#524440]">
                  <div className="flex justify-between">
                    <span>Items Subtotal ({cart.reduce((s, i) => s + i.quantity, 0)}):</span>
                    <span className="font-serif font-bold text-[#421b0f]">₹ {totalAmount.toLocaleString("en-IN")}</span>
                  </div>
                  <div className="flex justify-between text-[#2E7D32]">
                    <span>GI Craft Authenticity Assurance:</span>
                    <span className="font-bold">Free</span>
                  </div>
                  <div className="flex justify-between text-[#845333]">
                    <span>Artisan Remittance:</span>
                    <span className="font-bold">100% Direct</span>
                  </div>
                  <div className="pt-2 border-t border-[#f6ede0] flex justify-between font-serif text-base font-bold text-[#421b0f]">
                    <span>Total Amount:</span>
                    <span>₹ {totalAmount.toLocaleString("en-IN")}</span>
                  </div>
                </div>

                <button
                  onClick={handleCheckout}
                  disabled={isCheckingOut}
                  className="w-full py-4 rounded-2xl bg-[#421b0f] text-white font-sans text-sm font-bold shadow-lg hover:bg-[#845333] transition-all flex items-center justify-center gap-2"
                >
                  {isCheckingOut ? (
                    <span>Processing Direct Order...</span>
                  ) : (
                    <>
                      <span>Complete Artisan Checkout</span>
                      <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                    </>
                  )}
                </button>
              </div>
            )}
          </>
        )}

      </div>
    </div>
  );
};

export default CartDrawer;
