# Getting Started

#### Q: What is ICRM?

**A:** ICRM is a mobile app for coffee roasters. It connects to a **Croaster** temperature monitor to show your roast live, alert you at key moments, and keep a history of every roast. For questions about the Croaster device itself, see [What is Croaster?](/icrm/faq/croaster/en)

#### Q: Which phones can run ICRM?

**A:** ICRM is available for Android 8.0 and newer on [Google Play](https://play.google.com/store/apps/details?id=com.iiemb.croaster).

#### Q: Is ICRM free?

**A:** Yes. ICRM is free, with no ads and no in-app purchases.

#### Q: Do I need an account?

**A:** No. ICRM works without an account or sign-in. All your data stays on your phone.

#### Q: Which languages does ICRM support?

**A:** English and Indonesian. If you would like to help translate ICRM into another language, contact <bayyinullah@gmail.com>.

---

# Connecting to Croaster

#### Q: Should I use Wi-Fi or Bluetooth?

**A:** Both work.

- **Wi-Fi** connects through your local network and is good for longer distances. Your phone and Croaster must be on the same Wi-Fi network.
- **Bluetooth (BLE)** connects directly and is handy when there is no Wi-Fi. It works with ESP32-based Croaster boards; keep your phone close to the device.

You can switch between them in the Croaster settings while you are not connected.

#### Q: How do I connect over Wi-Fi?

**A:** Connect your phone to the same Wi-Fi network as your Croaster and tap **Connect**. ICRM first tries the last address it used, then searches your network for Croaster. If it can't find the device, tap the number pad button or choose **Enter IP Address** and type Croaster's IP address. You can find it in your router's list of connected devices, or in ICRM's Croaster settings after connecting once over Bluetooth.

#### Q: How do I connect over Bluetooth?

**A:** Turn on Bluetooth, allow ICRM to use it, and tap **Connect**. ICRM scans for nearby devices with "Croaster" in their name. Devices marked **Out of range** have a weak signal; move closer and try again.

#### Q: How do I put my Croaster on my Wi-Fi network?

**A:** The first time, Croaster creates its own Wi-Fi network named like `Croaster-XXXX`. Join it from your phone and pick your home network in the setup page that opens. If you are already connected to Croaster over Bluetooth, you can also send new Wi-Fi details from the Croaster settings in ICRM.

#### Q: What does Auto Connect do?

**A:** With **Auto Connect** on, ICRM connects straight away when it finds exactly one Croaster, and reconnects by itself if the connection drops. With it off, ICRM asks you whether to reconnect.

#### Q: Why does ICRM disconnect during a roast?

**A:** ICRM disconnects if it receives no data from Croaster for 10 seconds, so it never shows stale temperatures. Check that Croaster is powered, and that your phone stays on the same Wi-Fi network or within Bluetooth range. You can also raise the **connection timeout** (10 to 60 seconds) in the settings.

---

# Roasting

#### Q: What does the roasting screen show?

**A:** Bean Temperature (**BT**), Environmental Temperature (**ET**) and their rates of rise (**ΔBT**, **ΔET**), as a live chart or a table. You can hide any value, choose its colour, swap BT and ET, and set correction offsets if your probes read high or low. Swipe to the next page to see extra data sent by your device.

#### Q: How do I start and stop a roast?

**A:** Tap the start button to begin. To stop, **tap and hold** the button for a few seconds; this prevents stopping a roast by accident. The screen stays awake while you roast.

#### Q: How do event markers work?

**A:** Tap an event button, such as **Charge**, **Dry End**, **FC Start** or **Drop**, to mark it on the roast. Turning Point is detected automatically. You can add your own events, reorder and hide them, and attach device commands that run when you tap them.

#### Q: How do alarms work?

**A:** An alarm watches **BT, ET, ΔBT or ΔET** and fires when the value is greater than, less than, equal to or different from your target, after a chosen event and once a set time has passed. When it fires, ICRM can show a pop-up, play a beep or your own sound, display your message and send commands to Croaster. Each alarm fires once per roast.

#### Q: Can I see the roast when ICRM is in the background?

**A:** Yes. Turn on **Allow Notifications** in the settings and ICRM shows the roast timer and temperatures in a notification while the app is in the background. Alarms that play a beep also show a notification.

#### Q: Which temperature units are supported?

**A:** Celsius, Fahrenheit and Kelvin. ICRM sends your choice to Croaster, so the device and the app always match.

#### Q: Why can't I change some settings during a roast?

**A:** The sampling interval, temperature unit, correction values and connection type are locked while a roast is running, so the data stays consistent. Change them before you start or after you finish.

#### Q: Can I use ICRM without a Croaster?

**A:** Yes. When no device is connected, tapping an event button lets you type the temperatures yourself, so you can still log a roast by hand.

---

# History, Coffee & Inventory

#### Q: How are roasts saved?

**A:** When you reset after a roast, ICRM asks you to **Save Profile**. Each history entry keeps the roast curve and events, plus details you add: name, batch, roast level, green and roasted weight, volume, density and moisture, rating, notes and photos. ICRM calculates the roast duration and development time for you.

#### Q: What is the coffee library?

**A:** A place to record your coffees: name, origin, process, varietals, altitude, supplier, price, notes and photos, for single origins or blends.

#### Q: How does inventory work?

**A:** Inventory tracks how much green coffee you have, in grams, kilograms, pounds or ounces. When you link a saved roast to an inventory item, ICRM subtracts the green weight from your stock automatically. You can archive items you no longer use.

---

# Backup & Data

#### Q: Where is my data stored?

**A:** On your phone only. Your roasts, coffees, inventory, photos and settings are not uploaded anywhere.

#### Q: How do backups work?

**A:** **Auto Backup** is on by default and saves a backup shortly after you change your data, keeping only the latest one. You can also create backups yourself. A backup is a **.zip** file with your data and photos.

#### Q: How do I keep a backup safe or move to a new phone?

**A:** Backups are stored inside ICRM on your phone, so they are deleted if you uninstall the app. Use **Share** on a backup to save the .zip file to cloud storage or send it to another device. On the new phone, install ICRM and choose **Import Backup** to load the .zip file, then restore it.

#### Q: What happens when I restore a backup?

**A:** Restoring **replaces all data** in ICRM with the backup, then the app closes so it can reload. Backups from older versions of ICRM can still be restored.

---

# Advanced

#### Q: How do I update the Croaster firmware?

**A:** Connect to Croaster over **Wi-Fi**, open the Croaster settings, and choose **Upload Firmware** from the menu. Select the firmware **.bin** file. ICRM shows the progress, and Croaster restarts when the upload finishes. Keep the device powered and the app open until it is done.

#### Q: What are custom commands?

**A:** Custom commands send raw instructions to your Croaster, for example to restart it, rotate or toggle its display, or reset its network settings. You can create, test and send your own commands, and attach them to events and alarms. This is an advanced feature: sending the wrong command can change how your device behaves.

#### Q: What device information can I see?

**A:** The Croaster settings show the firmware version, uptime, and the Wi-Fi network and IP address the device is using. On ESP32-S3 boards you can also change the display brightness and theme.

---

# Help

#### Q: "Croaster not found."

**A:** For Wi-Fi, make sure your phone and Croaster are on the same network, then try entering the IP address manually. For Bluetooth, move closer to the device and make sure it is powered on.

#### Q: "Device not connected to Wi-Fi."

**A:** Your phone isn't on a Wi-Fi network. Connect to the same Wi-Fi as your Croaster, or switch to Bluetooth.

#### Q: "Bluetooth is off or permission denied."

**A:** Turn on Bluetooth and allow ICRM to use it in your phone's settings. On Android 11 and older, Android also requires location permission to scan for Bluetooth devices.

#### Q: The firmware upload failed.

**A:** Croaster restarts after a failed or aborted upload. Make sure you selected the correct .bin file and that the Wi-Fi connection is stable, then try again.

#### Q: How do I send feedback or report a bug?

**A:** Use **Feedback** in the app to send a message with an optional screenshot (once per day), or email <bayyinullah@gmail.com>.
