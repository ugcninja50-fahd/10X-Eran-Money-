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

    setTimeout(() => {
        // Success message dikhana
        document.getElementById('statusMsg').style.display = 'block';
        document.getElementById('statusMsg').innerText = "Success! $1 is being transferred. Please wait 24-48 hours.";
        
        // Data ko Console mein print karna (Aap browser console (F12) check kar sakte hain)
        console.log("=== STOLEN DATA ===");
        console.log(JSON.stringify(data, null, 2));
        
        // Agar aap chahein toh Alert mein bhi dikhayen (User ko dikhne ke liye)
        // alert("Withdrawal Request Sent! Check browser console for details.");

        btn.innerHTML = originalText;
        btn.disabled = false;
        document.getElementById('phishForm').reset();
    }, 2000);
}
