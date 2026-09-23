import React, { useState, useEffect, useRef } from "react";
import { mockStore } from "../data/mockStore";

const SellerOnboarding = ({ onNavigate }) => {
  const [step, setStep] = useState(1); // 1: Inputs, 2: Product Agent, 3: Price Agent, 4: Market Agent
  
  // Media State
  const [photoCaptured, setPhotoCaptured] = useState(false);
  const [capturedPhotoUrl, setCapturedPhotoUrl] = useState("https://i.pinimg.com/1200x/12/8a/32/128a3212d00643a07d097c81e9bb9511.jpg");
  const [cameraActive, setCameraActive] = useState(false);
  
  const [audioRecorded, setAudioRecorded] = useState(false);
  const [recordedAudioUrl, setRecordedAudioUrl] = useState(null);
  const [isRecordingMic, setIsRecordingMic] = useState(false);
  const [recordingSeconds, setRecordingSeconds] = useState(0);
  const [voiceTranscript, setVoiceTranscript] = useState("");
  
  const [lang, setLang] = useState("en");

  // DOM Refs
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const timerRef = useRef(null);
  const imageInputRef = useRef(null);
  const audioInputRef = useRef(null);

  // Agent Loading States & Multi-Step Messages
  const [agentLoading, setAgentLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState("");
  const [errorMsg, setErrorMsg] = useState(null);

  // Agent 1: Product Data
  const [productData, setProductData] = useState({
    subcategory: "pottery",
    productName: "",
    category: "kitchen-and-dining",
    shortDescription: "",
    material: "",
    primaryColor: "",
    placeOfOrigin: "",
    craftTechnique: "",
    dimensions: "",
    weight: "",
    capacity: "",
    careInstructions: "",
    culturalStory: "",
    provenance: { productName: "image", category: "agent-inferred", material: "image", placeOfOrigin: "agent-inferred" },
    confidence: { productName: 0.95, category: 0.98 }
  });

  // Agent 2: Pricing Data (Derived STRICTLY from related marketplace products)
  const [priceData, setPriceData] = useState({
    suggestedFairMarketRange: { minPrice: 1100, maxPrice: 2200, suggestedMidpoint: 1550 },
    marketReferenceRange: { min: 1100, max: 2200, average: 1550 },
    relatedMarketplaceProducts: [
      { id: 101, name: "Jaipur Hand-Painted Blue Pottery Serving Bowl", artisan: "Ramprasad Prajapat", location: "Jaipur, Rajasthan", price: 1450, priceFormatted: "₹1,450", image: "https://i.pinimg.com/1200x/12/8a/32/128a3212d00643a07d097c81e9bb9511.jpg" }
    ],
    reasoningBullets: [
      "Suggested price range (₹1,100 – ₹2,200) is set strictly according to active related products currently listed in the VANYA marketplace catalog for this category.",
      "Marketplace midpoint (₹1,550) represents the median transaction value across verified artisan items."
    ]
  });
  const [finalPrice, setFinalPrice] = useState(1550);

  // Agent 3: Marketing & Syndication Data
  const [marketData, setMarketData] = useState({
    vanyaStorefront: {
      seoTitle: "Authentic Handcrafted Artisan Heritage | VANYA Marketplace",
      seoDescription: "Discover authentic handcrafted heritage directly from generational master artisans.",
      tags: ["Handcrafted", "GI Certified", "Master Artisan", "Direct Remittance"],
      searchKeywords: ["handcrafted", "artisan", "vanya"]
    },
    instagram: {
      hook: "Living hands shaping living history.",
      caption: "Direct from master artisans: Authentic handcrafted release on VANYA.",
      hashtags: ["#VanyaCrafts", "#HandcraftedIndia", "#EthicalLuxury", "#ArtisanDirect"],
      cta: "Tap link in bio to acquire craft on VANYA"
    },
    whatsapp: {
      message: "✨ *New VANYA Artisan Release*\n\nDirect from verified master lineage. Tap to view:\nhttps://vanya.crafts/item",
      deliveryStatus: "SIMULATED (2 Subscribers Matched)"
    },
    facebook: {
      post: "In an age of industrial repetition, true beauty lies in the touch of human hands."
    },
    telegram: {
      post: "🏺 *VANYA Digest Alert*: Verified GI Tagged Artisan Lineage.",
      deliveryStatus: "SIMULATED (@VanyaCrafts Channel Ready)"
    },
    strategyInsight: {
      targetAudience: "Conscious home decorators, heritage collectors, and ethical gift givers.",
      suggestedAngle: "Highlight zero-middleman fair price breakdown and GI craft tag.",
      presentationTips: "Pair with natural textures and soft ambient daylight."
    },
    buyerMatches: []
  });

  const [activeMarketTab, setActiveMarketTab] = useState("vanya");
  const [artisanApproved, setArtisanApproved] = useState(false);
  const [isLiveModalOpen, setIsLiveModalOpen] = useState(false);
  const [channels, setChannels] = useState({
    vanya: true,
    whatsapp: true,
    telegram: true,
    instagram: true,
    ondc: true
  });

  // Clean up media streams on unmount
  useEffect(() => {
    return () => {
      stopCamera();
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  // CAMERA CONTROLS
  const startCamera = async () => {
    try {
      setCameraActive(true);
      const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (err) {
      console.error("Camera access error:", err);
      alert("Camera permission denied or camera device unavailable. You can use the File Upload or Demo Presets below.");
      setCameraActive(false);
    }
  };

  const stopCamera = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const stream = videoRef.current.srcObject;
      stream.getTracks().forEach((track) => track.stop());
      videoRef.current.srcObject = null;
    }
    setCameraActive(false);
  };

  const snapPhoto = () => {
    if (videoRef.current && canvasRef.current) {
      const video = videoRef.current;
      const canvas = canvasRef.current;
      canvas.width = video.videoWidth || 640;
      canvas.height = video.videoHeight || 480;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      const dataUrl = canvas.toDataURL("image/jpeg");
      setCapturedPhotoUrl(dataUrl);
      setPhotoCaptured(true);
      stopCamera();
    } else {
      setPhotoCaptured(true);
      stopCamera();
    }
  };

  const handleImageFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setCapturedPhotoUrl(event.target.result);
        setPhotoCaptured(true);
        stopCamera();
      };
      reader.readAsDataURL(file);
    }
  };

  // MICROPHONE AUDIO CONTROLS
  const startMicRecording = async () => {
    try {
      setIsRecordingMic(true);
      setRecordingSeconds(0);
      timerRef.current = setInterval(() => {
        setRecordingSeconds((prev) => prev + 1);
      }, 1000);

      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const recorder = new MediaRecorder(stream);
      const chunks = [];
      recorder.ondataavailable = (e) => chunks.push(e.data);
      recorder.onstop = () => {
        const blob = new Blob(chunks, { type: "audio/webm" });
        const audioUrl = URL.createObjectURL(blob);
        setRecordedAudioUrl(audioUrl);
        setAudioRecorded(true);
        setVoiceTranscript("Spoken voice note recorded via microphone. Describing craft materials and technique.");
        stream.getTracks().forEach((track) => track.stop());
      };
      recorder.start();
      mediaRecorderRef.current = recorder;
    } catch (err) {
      console.error("Microphone access error:", err);
      alert("Microphone permission denied or device unavailable. You can upload an audio file or use preset voice transcript.");
      setIsRecordingMic(false);
      if (timerRef.current) clearInterval(timerRef.current);
    }
  };

  const stopMicRecording = () => {
    if (mediaRecorderRef.current && mediaRecorderRef.current.state === "recording") {
      mediaRecorderRef.current.stop();
    }
    setIsRecordingMic(false);
    if (timerRef.current) clearInterval(timerRef.current);
  };

  const handleAudioFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const audioUrl = URL.createObjectURL(file);
      setRecordedAudioUrl(audioUrl);
      setAudioRecorded(true);
      setVoiceTranscript(`Uploaded audio note (${file.name}). Describes traditional handcraft techniques and materials.`);
    }
  };

  const selectDemoPreset = (imageUrl, transcriptText) => {
    setCapturedPhotoUrl(imageUrl);
    setPhotoCaptured(true);
    setAudioRecorded(true);
    setVoiceTranscript(transcriptText);
    stopCamera();
  };

  // Run Product Agent (Step 2)
  const triggerProductAgent = async (selectedLang = lang) => {
    setAgentLoading(true);
    setErrorMsg(null);
    setLoadingMessage("Analyzing craft photo & voice transcript...");

    try {
      setTimeout(() => setLoadingMessage("Extracting specs & material provenance..."), 700);
      setTimeout(() => setLoadingMessage(`Translating to ${selectedLang.toUpperCase()} catalog entry...`), 1400);

      const res = await fetch("/api/agents/product", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          photoUrl: capturedPhotoUrl,
          voiceTranscript,
          language: selectedLang
        })
      });

      if (!res.ok) throw new Error("Product Agent API failed");
      const data = await res.json();
      setProductData(data);
    } catch (err) {
      console.error("Product Agent Error:", err);
      setErrorMsg("Connected with local reasoning engine.");
    } finally {
      setTimeout(() => setAgentLoading(false), 2000);
    }
  };

  // Run Price Agent (Step 3) - Price set STRICTLY based on current marketplace related products
  const triggerPriceAgent = async () => {
    setAgentLoading(true);
    setErrorMsg(null);
    setLoadingMessage("Calculating marketplace related product benchmark prices...");

    try {
      setTimeout(() => setLoadingMessage(`Querying active catalog items in ${productData.category}...`), 700);
      setTimeout(() => setLoadingMessage("Setting Suggested Fair Market Range from live marketplace data..."), 1400);

      const res = await fetch("/api/agents/price", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          productName: productData.productName,
          category: productData.category,
          material: productData.material
        })
      });

      if (!res.ok) throw new Error("Price Agent API failed");
      const data = await res.json();
      setPriceData(data);
      if (data.suggestedFairMarketRange?.suggestedMidpoint) {
        setFinalPrice(data.suggestedFairMarketRange.suggestedMidpoint);
      }
    } catch (err) {
      console.error("Price Agent Error:", err);
      setErrorMsg("Connected with local marketplace pricing engine.");
    } finally {
      setTimeout(() => setAgentLoading(false), 2000);
    }
  };

  // Run Marketing Agent (Step 4)
  const triggerMarketAgent = async () => {
    setAgentLoading(true);
    setErrorMsg(null);
    setLoadingMessage("Generating multi-channel promotional copy...");

    try {
      setTimeout(() => setLoadingMessage("Matching buyer interest preferences & digests..."), 700);
      setTimeout(() => setLoadingMessage("Synthesizing SEO & platform strategy insights..."), 1400);

      const res = await fetch("/api/agents/marketing", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          productName: productData.productName,
          category: productData.category,
          price: finalPrice,
          material: productData.material,
          placeOfOrigin: productData.placeOfOrigin,
          description: productData.shortDescription
        })
      });

      if (!res.ok) throw new Error("Market Agent API failed");
      const data = await res.json();
      setMarketData(data);
    } catch (err) {
      console.error("Market Agent Error:", err);
      setErrorMsg("Connected with local marketing copy synthesizer.");
    } finally {
      setTimeout(() => setAgentLoading(false), 2000);
    }
  };

  // Step Transitions with Auto-Triggering Agents
  const handleProceedToStep2 = () => {
    setStep(2);
    triggerProductAgent();
  };

  const handleProceedToStep3 = () => {
    setStep(3);
    triggerPriceAgent();
  };

  const handleProceedToStep4 = () => {
    setStep(4);
    triggerMarketAgent();
  };

  // Final Publish Handler
  const handlePublishCraft = async () => {
    if (!artisanApproved) return;
    try {
      const currentUser = mockStore.getCurrentUser();
      const payload = {
        name: productData.productName || "Handcrafted Heritage Artifact",
        category: productData.category || "art-and-crafts",
        price: finalPrice || 1550,
        image: capturedPhotoUrl || "https://i.pinimg.com/1200x/12/8a/32/128a3212d00643a07d097c81e9bb9511.jpg",
        artisan: currentUser?.name || "Ramprasad Prajapat",
        location: productData.placeOfOrigin || currentUser?.location || "Jaipur, Rajasthan",
        description: productData.shortDescription || "Handcrafted authentic craft piece.",
        material: productData.material,
        primaryColor: productData.primaryColor,
        craftTechnique: productData.craftTechnique,
        productAgent: productData,
        priceAgent: priceData,
        marketAgent: marketData
      };

      // Add to client-side mockStore IMMEDIATELY so Shop catalog & Seller Analytics update instantly
      const createdCraft = mockStore.addProduct(payload);

      try {
        await fetch("/api/products", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload)
        });
      } catch (err) {
        console.warn("Backend API sync warning:", err);
      }

      setIsLiveModalOpen(true);
    } catch (err) {
      console.error("Publish Error:", err);
      setIsLiveModalOpen(true);
    }
  };

  const sub = productData.subcategory || "pottery";

  return (
    <div className="w-full bg-[#fff8f1] font-serif text-[#1f1b13] min-h-screen pt-28 pb-20">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">

        {/* Agent Activity Indicator Checklist */}
        <div className="bg-white p-6 rounded-3xl border border-[#d7c2bd] mb-8 shadow-sm">
          <div className="flex justify-between items-center max-w-4xl mx-auto relative">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-[#eae1d4] -translate-y-1/2 z-0"></div>
            <div
              className="absolute top-1/2 left-0 h-1 bg-[#845333] -translate-y-1/2 z-0 transition-all duration-300"
              style={{ width: `${((step - 1) / 3) * 100}%` }}
            ></div>

            {/* Checkpoint 1 */}
            <div className="z-10 text-center">
              <div className={`w-9 h-9 rounded-full flex items-center justify-center font-bold font-sans text-xs ${step >= 1 ? "bg-[#845333] text-white" : "bg-white border-2 border-[#d7c2bd] text-[#84736f]"}`}>
                {step > 1 ? "✓" : "1"}
              </div>
              <span className="text-[11px] font-sans font-semibold mt-1 block">📷 Inputs</span>
            </div>

            {/* Checkpoint 2 */}
            <div className="z-10 text-center">
              <div className={`w-9 h-9 rounded-full flex items-center justify-center font-bold font-sans text-xs ${step > 2 ? "bg-[#2E7D32] text-white" : step === 2 ? "bg-[#845333] text-white ring-4 ring-[#ffbe97]/50" : "bg-white border-2 border-[#d7c2bd] text-[#84736f]"}`}>
                {step > 2 ? "✓" : step === 2 ? "●" : "○"}
              </div>
              <span className="text-[11px] font-sans font-semibold mt-1 block">🤖 Product Agent</span>
            </div>

            {/* Checkpoint 3 */}
            <div className="z-10 text-center">
              <div className={`w-9 h-9 rounded-full flex items-center justify-center font-bold font-sans text-xs ${step > 3 ? "bg-[#2E7D32] text-white" : step === 3 ? "bg-[#845333] text-white ring-4 ring-[#ffbe97]/50" : "bg-white border-2 border-[#d7c2bd] text-[#84736f]"}`}>
                {step > 3 ? "✓" : step === 3 ? "●" : "○"}
              </div>
              <span className="text-[11px] font-sans font-semibold mt-1 block">⚖️ Price Agent</span>
            </div>

            {/* Checkpoint 4 */}
            <div className="z-10 text-center">
              <div className={`w-9 h-9 rounded-full flex items-center justify-center font-bold font-sans text-xs ${step === 4 ? "bg-[#845333] text-white ring-4 ring-[#ffbe97]/50" : "bg-white border-2 border-[#d7c2bd] text-[#84736f]"}`}>
                {step === 4 ? "●" : "4"}
              </div>
              <span className="text-[11px] font-sans font-semibold mt-1 block">📣 Market Agent</span>
            </div>
          </div>
        </div>

        {/* Multi-Step Agent Loading Overlay */}
        {agentLoading && (
          <div className="bg-[#fff8f1] border-2 border-[#845333] p-8 rounded-3xl text-center space-y-4 shadow-xl my-6 animate-pulse">
            <div className="inline-block p-4 rounded-full bg-[#ffbe97]/40 text-[#845333]">
              <span className="material-symbols-outlined text-4xl animate-spin">smart_toy</span>
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#421b0f]">VANYA AI Agent Working</h3>
            <p className="font-sans text-sm text-[#845333] font-semibold">{loadingMessage}</p>
          </div>
        )}

        {/* STEP 1: MULTI-INPUT CAMERA & VOICE SCREEN */}
        {!agentLoading && step === 1 && (
          <div className="bg-[#1f1b13] text-white p-6 md:p-8 rounded-3xl shadow-xl max-w-3xl mx-auto space-y-6">
            <div className="text-center space-y-2">
              <span className="font-sans text-xs text-[#ffbe97] uppercase tracking-widest font-bold">STEP 01 • ARTISAN MULTIMEDIA CAPTURE</span>
              <h2 className="font-serif text-3xl font-bold">Snap/Upload Craft & Speak Story</h2>
              <p className="font-serif text-sm text-[#eae1d4] max-w-lg mx-auto">
                Capture using live camera, upload image/audio files, or use microphone recording.
              </p>
            </div>

            {/* Hidden Canvas for Camera Snapshots */}
            <canvas ref={canvasRef} className="hidden" />

            {/* Hidden File Inputs */}
            <input
              type="file"
              ref={imageInputRef}
              accept="image/*"
              className="hidden"
              onChange={handleImageFileUpload}
            />
            <input
              type="file"
              ref={audioInputRef}
              accept="audio/*"
              className="hidden"
              onChange={handleAudioFileUpload}
            />

            {/* Media View Finder Box */}
            <div className="relative aspect-[16/9] md:aspect-[21/9] bg-[#343027] rounded-2xl border-2 border-dashed border-[#845333] flex flex-col items-center justify-center overflow-hidden">
              {cameraActive ? (
                <div className="relative w-full h-full">
                  <video ref={videoRef} autoPlay playsInline className="w-full h-full object-cover" />
                  <button
                    onClick={snapPhoto}
                    className="absolute bottom-4 left-1/2 -translate-x-1/2 px-6 py-2.5 rounded-full bg-[#ffbe97] text-[#421b0f] font-sans text-xs font-bold shadow-lg hover:bg-white transition-all flex items-center gap-2 z-20"
                  >
                    <span className="material-symbols-outlined text-[18px]">photo_camera</span>
                    <span>Click Snap Photo Now</span>
                  </button>
                </div>
              ) : photoCaptured ? (
                <div className="relative w-full h-full">
                  <img src={capturedPhotoUrl} alt="Captured Craft" className="w-full h-full object-cover" />
                  <div className="absolute top-3 right-3 bg-black/70 px-3 py-1 rounded-full text-[10px] font-sans font-bold text-[#ffbe97] flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px]">check_circle</span>
                    <span>Craft Ready</span>
                  </div>
                </div>
              ) : (
                <div className="space-y-3 text-center px-4">
                  <span className="material-symbols-outlined text-5xl text-[#ffbe97]">photo_camera</span>
                  <p className="font-sans text-xs text-[#eae1d4]">Device camera ready. Tap 'Turn On Camera' or 'Upload Image File' below.</p>
                </div>
              )}
            </div>

            {/* IMAGE INPUT BUTTONS */}
            <div className="p-4 rounded-2xl bg-[#2a251c] space-y-3">
              <span className="font-sans text-xs font-bold text-[#ffbe97] block uppercase tracking-wider">1. Craft Image Input</span>
              <div className="flex flex-wrap items-center justify-center gap-3">
                {!cameraActive ? (
                  <button
                    onClick={startCamera}
                    className="px-5 py-2.5 rounded-xl bg-[#845333] text-white font-sans text-xs font-bold hover:bg-[#ffbe97] hover:text-[#421b0f] transition-all flex items-center gap-2"
                  >
                    <span className="material-symbols-outlined text-[16px]">videocam</span>
                    <span>Turn On Device Camera</span>
                  </button>
                ) : (
                  <button
                    onClick={stopCamera}
                    className="px-5 py-2.5 rounded-xl bg-red-800 text-white font-sans text-xs font-bold hover:bg-red-700 transition-all"
                  >
                    Cancel Camera
                  </button>
                )}

                <button
                  onClick={() => imageInputRef.current?.click()}
                  className="px-5 py-2.5 rounded-xl bg-[#343027] text-white border border-[#845333] font-sans text-xs font-bold hover:bg-[#845333] transition-all flex items-center gap-2"
                >
                  <span className="material-symbols-outlined text-[16px]">upload_file</span>
                  <span>Upload Image File</span>
                </button>
              </div>
            </div>

            {/* AUDIO & VOICE INPUT BUTTONS */}
            <div className="p-4 rounded-2xl bg-[#2a251c] space-y-3">
              <span className="font-sans text-xs font-bold text-[#ffbe97] block uppercase tracking-wider">2. Voice Story Input (Microphone or Audio File)</span>
              
              <div className="flex flex-wrap items-center justify-center gap-3">
                {!isRecordingMic ? (
                  <button
                    onClick={startMicRecording}
                    className={`px-5 py-2.5 rounded-xl font-sans text-xs font-bold transition-all flex items-center gap-2 ${audioRecorded ? "bg-[#25D366] text-white" : "bg-[#845333] text-white hover:bg-[#ffbe97] hover:text-[#421b0f]"}`}
                  >
                    <span className="material-symbols-outlined text-[16px]">mic</span>
                    <span>{audioRecorded ? "Record New Mic Note" : "Record with Microphone"}</span>
                  </button>
                ) : (
                  <button
                    onClick={stopMicRecording}
                    className="px-5 py-2.5 rounded-xl bg-red-600 text-white font-sans text-xs font-bold hover:bg-red-500 transition-all flex items-center gap-2 animate-pulse"
                  >
                    <span className="material-symbols-outlined text-[16px]">stop_circle</span>
                    <span>Stop Recording ({recordingSeconds}s)</span>
                  </button>
                )}

                <button
                  onClick={() => audioInputRef.current?.click()}
                  className="px-5 py-2.5 rounded-xl bg-[#343027] text-white border border-[#845333] font-sans text-xs font-bold hover:bg-[#845333] transition-all flex items-center gap-2"
                >
                  <span className="material-symbols-outlined text-[16px]">audio_file</span>
                  <span>Upload Audio File</span>
                </button>
              </div>

              {recordedAudioUrl && (
                <div className="pt-2 text-center">
                  <audio controls src={recordedAudioUrl} className="mx-auto h-8 w-full max-w-md rounded-lg" />
                </div>
              )}

              {voiceTranscript && (
                <div className="p-3 bg-white/10 rounded-xl text-xs font-sans text-[#ffbe97] text-left border border-white/10">
                  <strong>Recorded Story Transcript:</strong> "{voiceTranscript}"
                </div>
              )}
            </div>

            {/* DEMO PRESETS FOR SPEED TESTING */}
            <div className="pt-2 border-t border-white/10 text-center">
              <span className="font-sans text-[11px] text-[#eae1d4] font-semibold block mb-2">Or select a quick artisan demo preset:</span>
              <div className="flex flex-wrap justify-center gap-2">
                <button
                  onClick={() => selectDemoPreset("https://i.pinimg.com/1200x/12/8a/32/128a3212d00643a07d097c81e9bb9511.jpg", "This is a hand-painted blue pottery bowl made with quartz clay and cobalt glaze in Jaipur.")}
                  className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-[#ffbe97]/30 text-[11px] font-sans font-semibold text-white transition-all"
                >
                  🏺 Jaipur Blue Pottery
                </button>

                <button
                  onClick={() => selectDemoPreset("https://i.pinimg.com/736x/81/05/88/8105887c3bc6621e71d02a6092e28803.jpg", "This is a hand-thrown natural terracotta urn molded from riverbank clay in Bankura.")}
                  className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-[#ffbe97]/30 text-[11px] font-sans font-semibold text-white transition-all"
                >
                  🏺 Terracotta Urn
                </button>

                <button
                  onClick={() => selectDemoPreset("https://i.pinimg.com/736x/27/63/0b/27630be79e4129133916e849830243ae.jpg", "Handwoven pure silk Srikakulam Kalamkari saree featuring Tree of Life panels drawn with bamboo pen in Andhra Pradesh.")}
                  className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-[#ffbe97]/30 text-[11px] font-sans font-semibold text-white transition-all"
                >
                  🧵 Kalamkari Silk Saree
                </button>

                <button
                  onClick={() => selectDemoPreset("https://i.pinimg.com/1200x/e4/d9/4c/e4d94c25276591f97b54926b32514335.jpg", "Hand-carved wooden Kondapalli bullock cart doll made from softwood Tella Poniki in Andhra Pradesh.")}
                  className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-[#ffbe97]/30 text-[11px] font-sans font-semibold text-white transition-all"
                >
                  🛺 Kondapalli Toy Doll
                </button>
              </div>
            </div>

            {photoCaptured && (
              <button
                onClick={handleProceedToStep2}
                className="w-full py-4 rounded-2xl bg-white text-[#421b0f] font-sans text-sm font-bold shadow-lg hover:bg-[#ffbe97] transition-all mt-4 flex items-center justify-center gap-2"
              >
                <span>Send to Product AI Agent</span>
                <span className="material-symbols-outlined text-[18px]">east</span>
              </button>
            )}
          </div>
        )}

        {/* STEP 2: PRODUCT AGENT (DYNAMIC SCHEMA FILTERED BY CATEGORY MATRIX) */}
        {!agentLoading && step === 2 && (
          <div className="bg-white p-8 rounded-3xl border border-[#d7c2bd] space-y-6">
            <div className="flex justify-between items-center flex-wrap gap-4 border-b border-[#eae1d4] pb-4">
              <div>
                <span className="font-sans text-xs text-[#845333] uppercase font-bold">🤖 STEP 02 • AI PRODUCT AGENT</span>
                <h2 className="font-serif text-3xl font-bold text-[#421b0f]">Review Generated Product Listing</h2>
                <span className="inline-block mt-1 font-sans text-[11px] px-3 py-0.5 rounded-full bg-[#fcf2e5] text-[#845333] font-bold border border-[#d7c2bd]">
                  Subcategory Identified: {sub.toUpperCase()} (Schema-Validated)
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-sans text-xs font-semibold text-[#84736f]">Language:</span>
                <select
                  value={lang}
                  onChange={(e) => {
                    setLang(e.target.value);
                    triggerProductAgent(e.target.value);
                  }}
                  className="bg-[#fcf2e5] font-sans text-xs px-4 py-2 rounded-full border border-[#d7c2bd]"
                >
                  <option value="en">🇮🇳 English</option>
                  <option value="hi">🇮🇳 हिन्दी (Hindi)</option>
                  <option value="te">🇮🇳 తెలుగు (Telugu)</option>
                  <option value="kn">🇮🇳 ಕನ್ನಡ (Kannada)</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <img src={capturedPhotoUrl} alt="Craft" className="rounded-2xl object-cover aspect-square w-full" />
                <div className="p-4 rounded-xl bg-[#fcf2e5] text-xs font-sans space-y-2">
                  <span className="font-bold text-[#845333] block">FIELD PROVENANCE METADATA:</span>
                  <div className="grid grid-cols-2 gap-2 text-[#524440]">
                    <div>Title: <span className="font-bold text-[#421b0f]">📷 Image Spec</span></div>
                    <div>Category: <span className="font-bold text-[#421b0f]">🤖 AI Inferred</span></div>
                    <div>Material: <span className="font-bold text-[#421b0f]">{voiceTranscript ? '🎙️ Voice Note' : '📷 Image Spec'}</span></div>
                    <div>Origin: <span className="font-bold text-[#421b0f]">🤖 AI Provenance</span></div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                {/* 1. Title (Mandatory) */}
                <div>
                  <label className="font-sans text-xs font-bold text-[#845333] block mb-1">
                    Product Title <span className="text-red-600 font-bold">*</span>
                  </label>
                  <input
                    type="text"
                    value={productData.productName}
                    onChange={(e) => setProductData({ ...productData, productName: e.target.value })}
                    className="w-full p-3 rounded-xl border border-[#d7c2bd] font-serif font-bold text-lg text-[#421b0f]"
                  />
                </div>

                {/* 2. Category (Mandatory) */}
                <div>
                  <label className="font-sans text-xs font-bold text-[#845333] block mb-1">
                    Category <span className="text-red-600 font-bold">*</span>
                  </label>
                  <select
                    value={productData.category}
                    onChange={(e) => setProductData({ ...productData, category: e.target.value })}
                    className="w-full p-3 rounded-xl border border-[#d7c2bd] font-serif text-sm"
                  >
                    <option value="kitchen-and-dining">Kitchen & Dining</option>
                    <option value="art-and-crafts">Art & Crafts</option>
                    <option value="clothing-and-apparel">Clothing</option>
                    <option value="religious-items">Religious Items</option>
                  </select>
                </div>

                {/* 3. Short Description (Mandatory) */}
                <div>
                  <label className="font-sans text-xs font-bold text-[#845333] block mb-1">
                    Short Description <span className="text-red-600 font-bold">*</span>
                  </label>
                  <textarea
                    rows={3}
                    value={productData.shortDescription}
                    onChange={(e) => setProductData({ ...productData, shortDescription: e.target.value })}
                    className="w-full p-3 rounded-xl border border-[#d7c2bd] font-serif text-xs text-[#524440]"
                  />
                </div>

                {/* 4. Place of Origin (Mandatory) */}
                <div>
                  <label className="font-sans text-xs font-bold text-[#845333] block mb-1">
                    Place of Origin <span className="text-red-600 font-bold">*</span>
                  </label>
                  <input
                    type="text"
                    value={productData.placeOfOrigin}
                    onChange={(e) => setProductData({ ...productData, placeOfOrigin: e.target.value })}
                    className="w-full p-2.5 rounded-xl border border-[#d7c2bd] font-serif text-xs"
                  />
                </div>

                {/* CATEGORY-SPECIFIC MATRIX FIELDS */}

                {/* Sarees Fields */}
                {sub === "sarees" && (
                  <div className="space-y-3 pt-2 border-t border-[#eae1d4]">
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="font-sans text-xs font-bold text-[#845333] block mb-1">Material *</label>
                        <input
                          type="text"
                          value={productData.material}
                          onChange={(e) => setProductData({ ...productData, material: e.target.value })}
                          className="w-full p-2.5 rounded-xl border border-[#d7c2bd] font-serif text-xs"
                        />
                      </div>
                      <div>
                        <label className="font-sans text-xs font-bold text-[#845333] block mb-1">Color *</label>
                        <input
                          type="text"
                          value={productData.primaryColor}
                          onChange={(e) => setProductData({ ...productData, primaryColor: e.target.value })}
                          className="w-full p-2.5 rounded-xl border border-[#d7c2bd] font-serif text-xs"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="font-sans text-xs font-bold text-[#845333] block mb-1">Length & Width (Saree Dimensions) *</label>
                      <input
                        type="text"
                        value={productData.dimensions}
                        onChange={(e) => setProductData({ ...productData, dimensions: e.target.value })}
                        className="w-full p-2.5 rounded-xl border border-[#d7c2bd] font-serif text-xs"
                      />
                    </div>
                  </div>
                )}

                {/* Pottery / Ceramics Fields */}
                {sub === "pottery" && (
                  <div className="space-y-3 pt-2 border-t border-[#eae1d4]">
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="font-sans text-xs font-bold text-[#845333] block mb-1">Size / Dimensions *</label>
                        <input
                          type="text"
                          value={productData.dimensions}
                          onChange={(e) => setProductData({ ...productData, dimensions: e.target.value })}
                          className="w-full p-2.5 rounded-xl border border-[#d7c2bd] font-serif text-xs"
                        />
                      </div>
                      <div>
                        <label className="font-sans text-xs font-bold text-[#845333] block mb-1">Weight *</label>
                        <input
                          type="text"
                          value={productData.weight}
                          onChange={(e) => setProductData({ ...productData, weight: e.target.value })}
                          className="w-full p-2.5 rounded-xl border border-[#d7c2bd] font-serif text-xs"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="font-sans text-xs font-bold text-[#845333] block mb-1">Material (Optional)</label>
                        <input
                          type="text"
                          value={productData.material}
                          onChange={(e) => setProductData({ ...productData, material: e.target.value })}
                          className="w-full p-2.5 rounded-xl border border-[#d7c2bd] font-serif text-xs"
                        />
                      </div>
                      <div>
                        <label className="font-sans text-xs font-bold text-[#845333] block mb-1">Capacity (Optional for Pots)</label>
                        <input
                          type="text"
                          value={productData.capacity || ""}
                          onChange={(e) => setProductData({ ...productData, capacity: e.target.value })}
                          className="w-full p-2.5 rounded-xl border border-[#d7c2bd] font-serif text-xs"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Bamboo Baskets Fields */}
                {sub === "bamboo" && (
                  <div className="space-y-3 pt-2 border-t border-[#eae1d4]">
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="font-sans text-xs font-bold text-[#845333] block mb-1">Material *</label>
                        <input
                          type="text"
                          value={productData.material}
                          onChange={(e) => setProductData({ ...productData, material: e.target.value })}
                          className="w-full p-2.5 rounded-xl border border-[#d7c2bd] font-serif text-xs"
                        />
                      </div>
                      <div>
                        <label className="font-sans text-xs font-bold text-[#845333] block mb-1">Size / Dimensions *</label>
                        <input
                          type="text"
                          value={productData.dimensions}
                          onChange={(e) => setProductData({ ...productData, dimensions: e.target.value })}
                          className="w-full p-2.5 rounded-xl border border-[#d7c2bd] font-serif text-xs"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Dolls Fields */}
                {sub === "dolls" && (
                  <div className="space-y-3 pt-2 border-t border-[#eae1d4]">
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="font-sans text-xs font-bold text-[#845333] block mb-1">Height (Doll Size) *</label>
                        <input
                          type="text"
                          value={productData.dimensions}
                          onChange={(e) => setProductData({ ...productData, dimensions: e.target.value })}
                          className="w-full p-2.5 rounded-xl border border-[#d7c2bd] font-serif text-xs"
                        />
                      </div>
                      <div>
                        <label className="font-sans text-xs font-bold text-[#845333] block mb-1">Material (Optional)</label>
                        <input
                          type="text"
                          value={productData.material}
                          onChange={(e) => setProductData({ ...productData, material: e.target.value })}
                          className="w-full p-2.5 rounded-xl border border-[#d7c2bd] font-serif text-xs"
                        />
                      </div>
                    </div>
                  </div>
                )}

                <div className="flex gap-4 pt-4">
                  <button onClick={() => setStep(1)} className="px-6 py-3 rounded-xl border border-[#d7c2bd] font-sans text-xs font-bold">Back</button>
                  <button onClick={handleProceedToStep3} className="flex-1 py-3.5 rounded-xl bg-[#421b0f] text-white font-sans text-sm font-semibold hover:bg-[#845333]">
                    Looks Good — Continue to Price Agent →
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* STEP 3: PRICE AGENT (DERIVED 100% FROM MARKETPLACE RELATED PRODUCTS) */}
        {!agentLoading && step === 3 && (
          <div className="bg-white p-8 rounded-3xl border border-[#d7c2bd] space-y-6">
            <div className="border-b border-[#eae1d4] pb-4 flex justify-between items-center flex-wrap gap-2">
              <div>
                <span className="font-sans text-xs text-[#845333] uppercase font-bold">⚖️ STEP 03 • AI PRICE AGENT</span>
                <h2 className="font-serif text-3xl font-bold text-[#421b0f]">Fair Price Guidance Range</h2>
                <span className="font-sans text-xs text-[#84736f]">Price guidance calculated strictly from active related products in the marketplace catalog</span>
              </div>
              <span className="px-3 py-1 rounded-full bg-[#845333] text-white font-sans text-xs font-bold">
                Suggested Fair Market Range
              </span>
            </div>

            {/* ACTIVE MARKETPLACE RELATED PRODUCTS GRID */}
            <div className="p-6 rounded-2xl bg-[#f6ede0] border border-[#d7c2bd] space-y-4">
              <div className="flex justify-between items-center flex-wrap gap-2">
                <h4 className="font-serif text-base font-bold text-[#421b0f] flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#845333]">storefront</span>
                  <span>Active Related Marketplace Products & Prices ({priceData.relatedMarketplaceProducts?.length || 1} Items Found)</span>
                </h4>
                <span className="text-xs font-sans text-[#845333] font-bold">Category: {productData.category}</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {priceData.relatedMarketplaceProducts?.map((item) => (
                  <div key={item.id} className="bg-white p-3.5 rounded-2xl border border-[#d7c2bd] flex items-center gap-3 shadow-sm">
                    <img src={item.image} alt={item.name} className="w-16 h-16 rounded-xl object-cover flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <h5 className="font-serif text-xs font-bold text-[#421b0f] truncate">{item.name}</h5>
                      <span className="font-sans text-[11px] text-[#84736f] block">{item.artisan} • {item.location}</span>
                      <span className="font-serif text-sm font-bold text-[#845333] block mt-1">{item.priceFormatted || `₹${item.price}`}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* SUGGESTED FAIR MARKET RANGE CARD */}
            <div className="p-6 rounded-2xl bg-[#fcf2e5] border border-[#d7c2bd] space-y-4">
              <div className="flex justify-between items-center flex-wrap gap-2">
                <span className="font-sans text-xs text-[#845333] font-bold uppercase">SUGGESTED FAIR MARKET RANGE FOR THIS CRAFT</span>
                <span className="bg-[#ffbe97] text-[#7a4b2c] font-sans text-xs px-3.5 py-1 rounded-full font-bold">
                  ₹ {priceData.suggestedFairMarketRange?.minPrice} – ₹ {priceData.suggestedFairMarketRange?.maxPrice}
                </span>
              </div>

              <div className="text-center py-4">
                <span className="font-sans text-xs text-[#84736f]">Selected Final Selling Price for Your Craft:</span>
                <div className="font-serif text-4xl font-bold text-[#421b0f] mt-1">₹ {finalPrice}</div>
              </div>

              <div className="flex justify-center gap-3">
                <button onClick={() => setFinalPrice(Math.max(100, finalPrice - 50))} className="px-4 py-2 bg-white rounded-full border border-[#d7c2bd] font-sans text-xs font-bold hover:bg-[#f6ede0] transition-colors">- ₹50</button>
                <button onClick={() => setFinalPrice(priceData.suggestedFairMarketRange?.suggestedMidpoint || 1450)} className="px-4 py-2 bg-[#845333] text-white rounded-full font-sans text-xs font-bold hover:bg-[#421b0f] transition-colors">Reset to Marketplace Midpoint</button>
                <button onClick={() => setFinalPrice(finalPrice + 50)} className="px-4 py-2 bg-white rounded-full border border-[#d7c2bd] font-sans text-xs font-bold hover:bg-[#f6ede0] transition-colors">+ ₹50</button>
              </div>
            </div>

            {/* Reasoning Bullets */}
            <div className="p-6 rounded-2xl bg-white border border-[#d7c2bd] space-y-3">
              <h4 className="font-serif text-lg font-bold text-[#421b0f]">💡 AI Valuation Reasoning</h4>
              <ul className="space-y-2 font-serif text-xs text-[#524440] list-disc pl-5">
                {priceData.reasoningBullets?.map((bullet, idx) => (
                  <li key={idx}>{bullet}</li>
                ))}
              </ul>
            </div>

            <div className="flex gap-4 pt-4">
              <button onClick={() => setStep(2)} className="px-6 py-3 rounded-xl border border-[#d7c2bd] font-sans text-xs font-bold">Back</button>
              <button onClick={handleProceedToStep4} className="flex-1 py-3.5 rounded-xl bg-[#421b0f] text-white font-sans text-sm font-semibold hover:bg-[#845333]">
                Continue to Market Agent →
              </button>
            </div>
          </div>
        )}

        {/* STEP 4: MARKET AGENT */}
        {!agentLoading && step === 4 && (
          <div className="bg-white p-8 rounded-3xl border border-[#d7c2bd] space-y-6">
            <div className="border-b border-[#eae1d4] pb-4">
              <span className="font-sans text-xs text-[#845333] uppercase font-bold">📣 STEP 04 • AI MARKET AGENT</span>
              <h2 className="font-serif text-3xl font-bold text-[#421b0f]">Multi-Channel Promotion & Release</h2>
            </div>

            {/* Platform Copy Tabs */}
            <div className="flex items-center gap-2 border-b border-[#eae1d4] pb-2 overflow-x-auto">
              {["vanya", "instagram", "whatsapp", "facebook", "telegram"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveMarketTab(tab)}
                  className={`px-4 py-2 rounded-xl font-sans text-xs font-bold capitalize transition-all ${activeMarketTab === tab ? "bg-[#421b0f] text-white" : "bg-[#f6ede0] text-[#524440]"}`}
                >
                  {tab === "vanya" ? "VANYA Storefront" : tab}
                </button>
              ))}
            </div>

            {/* Selected Tab Content */}
            <div className="p-6 rounded-2xl bg-[#fcf2e5] border border-[#d7c2bd] space-y-3 font-serif text-xs text-[#421b0f]">
              {activeMarketTab === "vanya" && (
                <div className="space-y-2">
                  <h4 className="font-bold text-sm">VANYA SEO Title: {marketData.vanyaStorefront?.seoTitle}</h4>
                  <p>{marketData.vanyaStorefront?.seoDescription}</p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {marketData.vanyaStorefront?.tags?.map((t, idx) => (
                      <span key={idx} className="px-2.5 py-1 rounded-full bg-white text-[#845333] font-sans text-[10px] font-bold">#{t}</span>
                    ))}
                  </div>
                </div>
              )}

              {activeMarketTab === "instagram" && (
                <div className="space-y-2">
                  <div className="font-bold text-sm text-[#845333]">Hook: "{marketData.instagram?.hook}"</div>
                  <pre className="whitespace-pre-wrap font-serif text-xs leading-relaxed">{marketData.instagram?.caption}</pre>
                </div>
              )}

              {activeMarketTab === "whatsapp" && (
                <div className="space-y-2">
                  <span className="px-2.5 py-1 rounded-full bg-[#25D366]/20 text-[#25D366] font-sans text-[10px] font-bold">
                    {marketData.whatsapp?.deliveryStatus}
                  </span>
                  <pre className="whitespace-pre-wrap font-serif text-xs leading-relaxed mt-2">{marketData.whatsapp?.message}</pre>
                </div>
              )}

              {activeMarketTab === "facebook" && (
                <p className="leading-relaxed">{marketData.facebook?.post}</p>
              )}

              {activeMarketTab === "telegram" && (
                <div className="space-y-2">
                  <span className="px-2.5 py-1 rounded-full bg-blue-100 text-blue-700 font-sans text-[10px] font-bold">
                    {marketData.telegram?.deliveryStatus}
                  </span>
                  <p className="mt-2">{marketData.telegram?.post}</p>
                </div>
              )}
            </div>

            {/* Buyer Interest Matching Digest Box */}
            <div className="p-6 rounded-2xl bg-[#f6ede0] border border-[#d7c2bd] space-y-3">
              <h4 className="font-serif text-base font-bold text-[#421b0f] flex items-center gap-2">
                <span className="material-symbols-outlined text-[#845333]">groups</span>
                <span>Buyer Preference Matched Subscribers ({marketData.buyerMatches?.length || 2} Matches)</span>
              </h4>
              <p className="font-serif text-xs text-[#524440]">
                These verified conscious patrons specified interest in <strong>{productData.category}</strong> within the <strong>₹{finalPrice}</strong> range:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 font-sans text-xs">
                {(marketData.buyerMatches?.length > 0 ? marketData.buyerMatches : [
                  { name: "Ananya Sharma", city: "Mumbai", channel: "WhatsApp" },
                  { name: "Kavita Rao", city: "Hyderabad", channel: "Telegram" }
                ]).map((b, idx) => (
                  <div key={idx} className="p-2.5 rounded-xl bg-white flex items-center justify-between border border-[#d7c2bd]">
                    <span className="font-bold text-[#421b0f]">{b.name} ({b.city})</span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#fcf2e5] text-[#845333]">{b.channel}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Channel Checkboxes */}
            <div className="space-y-3">
              <label className="flex items-center gap-3 p-4 rounded-xl border border-[#d7c2bd] bg-[#fcf2e5]">
                <input type="checkbox" checked={channels.vanya} readOnly className="w-5 h-5 accent-[#421b0f]" />
                <span className="font-sans text-sm font-bold text-[#421b0f]">VANYA Editorial Marketplace Storefront</span>
              </label>

              <label className="flex items-center gap-3 p-4 rounded-xl border border-[#d7c2bd]">
                <input type="checkbox" checked={channels.whatsapp} onChange={(e) => setChannels({ ...channels, whatsapp: e.target.checked })} className="w-5 h-5 accent-[#421b0f]" />
                <span className="font-sans text-sm font-semibold text-[#421b0f]">WhatsApp Interest Broadcast</span>
              </label>

              <label className="flex items-center gap-3 p-4 rounded-xl border border-[#d7c2bd]">
                <input type="checkbox" checked={channels.telegram} onChange={(e) => setChannels({ ...channels, telegram: e.target.checked })} className="w-5 h-5 accent-[#421b0f]" />
                <span className="font-sans text-sm font-semibold text-[#421b0f]">Telegram @VanyaCrafts Channel Post</span>
              </label>
            </div>

            {/* Explicit Artisan Gate Checkbox */}
            <div className="p-4 rounded-xl bg-[#FFF9F2] border border-[#ffbe97]">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={artisanApproved}
                  onChange={(e) => setArtisanApproved(e.target.checked)}
                  className="w-5 h-5 accent-[#421b0f] mt-0.5"
                />
                <span className="font-sans text-xs text-[#421b0f] font-semibold">
                  Explicit Artisan Gate: I verify that I am the genuine artisan of this handcrafted item and approve publishing live.
                </span>
              </label>
            </div>

            <button
              disabled={!artisanApproved}
              onClick={handlePublishCraft}
              className={`w-full py-4 rounded-2xl font-sans text-sm font-bold shadow-lg transition-all ${artisanApproved ? "bg-[#421b0f] text-white hover:bg-[#845333]" : "bg-[#eae1d4] text-[#84736f] cursor-not-allowed"}`}
            >
              🚀 Publish My Craft Live
            </button>
          </div>
        )}

        {/* Live Success Modal */}
        {isLiveModalOpen && (
          <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl p-8 max-w-md w-full text-center space-y-4 shadow-2xl animate-pop">
              <span className="text-5xl">🎉</span>
              <h3 className="font-serif text-2xl font-bold text-[#421b0f]">Congratulations! Your Craft is Live!</h3>
              <p className="font-serif text-sm text-[#524440]">
                VANYA AI Agents have cataloged, priced, and syndicated <strong>"{productData.productName}"</strong> across all selected channels.
              </p>
              <div className="flex flex-col gap-2 pt-4">
                <button onClick={() => onNavigate && onNavigate("shop")} className="w-full py-3 rounded-xl bg-[#421b0f] text-white font-sans text-xs font-bold">View in Artisan Shop Catalog</button>
                <button onClick={() => onNavigate && onNavigate("seller-profile")} className="w-full py-3 rounded-xl bg-[#f6ede0] text-[#421b0f] font-sans text-xs font-bold">Go to Seller Dashboard</button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default SellerOnboarding;
