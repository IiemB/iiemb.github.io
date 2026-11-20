# What is Croaster?

Croaster is an **open-source coffee roasting temperature monitoring system** designed for home roasters, small businesses, and coffee enthusiasts. It provides **real-time tracking** of roasting temperatures and integrates seamlessly with the **ICRM app**.

------------------------------------------------------------------------

#### Q: What does Croaster do?

**A:** Croaster measures and displays **Environmental Temperature (ET)** and **Bean Temperature (BT)** during your coffee roast. It helps you monitor and control the roasting process for consistent, high-quality results.

------------------------------------------------------------------------

#### Q: What hardware does Croaster use?

**A:** Croaster is powered by: 
  - **ESP8266** (Wi-Fi only) or **ESP32C3** (Wi-Fi + Bluetooth Low Energy). 
  - **Two MAX6675 thermocouple sensors** (for ET and BT). 
  - **128×64 OLED (SSD1306)** for on-device display.

------------------------------------------------------------------------

#### Q: How does Croaster connect to ICRM?

**A:** Croaster connects via: 
  - **Wi-Fi (WebSocket)**: Ideal for stable, long-range connections. 
  - **Bluetooth Low Energy (BLE)**: Perfect for quick and wireless setups (ESP32 only).

------------------------------------------------------------------------

#### Q: Why use Croaster with ICRM?

**A:** The ICRM app enhances Croaster by offering: 
  - **Real-time graphs** of ET, BT, and Rate of Rise (RoR). 
  - **Roast history**: Save every roast session with its curve, events and notes. 
  - **Coffee library & inventory management**. 
  - **Event markers** (e.g., Dry End, First Crack). 
  - **Alarms & notifications** for critical points. 
  - **OTA firmware updates** (Wi-Fi).

------------------------------------------------------------------------

#### Q: Do I need Artisan or other software to use Croaster?

**A:** No, Croaster works **standalone with ICRM**. However, it is also compatible with **Artisan Roaster Scope** for advanced users.

------------------------------------------------------------------------

#### Q: Is Croaster open-source?

**A:** Yes. You can access the full source code and hardware documentation on [GitHub](https://github.com/IiemB/Croaster).

------------------------------------------------------------------------

#### Q: Who is Croaster for?

**A:** Anyone who wants better control over their coffee roasting, from beginners learning roasting curves to professionals perfecting profiles.

------------------------------------------------------------------------

## Final Note

Croaster, combined with ICRM, provides a **complete, affordable, and flexible roasting solution**, helping you roast smarter, not harder.
