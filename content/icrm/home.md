**ICRM** is a mobile app designed to connect with a [**Croaster**](https://github.com/IiemB/Croaster) to monitor and manage coffee roasting in real time. It helps coffee enthusiasts and professionals control and document their roasting process more effectively.

### Purpose

To provide a **portable, modern interface** for:

-   Real-time temperature tracking
    
-   Roast profiling
    
-   Roasting event logging
    
-   Coffee library and inventory management
    
-   Device setup and diagnostics

### Connectivity

ICRM connects to your **Croaster** device via:

-   **WiFi (WebSocket)** – for broader, reliable connections (supports [Artisan](https://artisan-scope.org/) too)
    
-   **Bluetooth (BLE)** – for quick, portable use with ESP32-based devices

### Core Features

-   📈 **Live roasting chart** with BT, ET and RoR (ΔBT, ΔET), in a chart or table view
    
-   📋 **Event markers** (e.g. Dry End, First Crack), plus your own custom events; Turning Point is detected automatically
    
-   ⏰ **Alarms** based on BT, ET or RoR values after an event and a set time, with a pop-up, sound or device command
    
-   🫘 **Coffee inventory tracking** for your green coffee stock; saving a roast deducts the green weight automatically
    
-   📖 **Roast history logging** with the curve, events, weights, roast level, development time, rating, notes and photos
    
-   🎨 **Modern themed UI** with light, dark and true-black themes, many colour schemes, and English or Indonesian
    
-   ⚙️ **Custom commands** for advanced device control (restart, display, etc.)
    
-   📦 **OTA firmware updates** by uploading a new firmware (.bin) file to your Croaster over Wi-Fi
