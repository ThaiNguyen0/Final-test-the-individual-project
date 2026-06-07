document.addEventListener('DOMContentLoaded', function() {
    var form = document.querySelector('.contact-form');
    if (!form) return;

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        var oTen = document.getElementById('name');
        var oSdt = document.getElementById('phone');
        var oEmail = document.getElementById('email');
        var oXe = document.getElementById('car');

        var ten = oTen.value.trim();
        var sdt = oSdt.value.trim();
        var email = oEmail.value.trim();
        var xe = oXe.value;

        var hopLe = true;
        var chuoiLoi = "";

        if (ten.length < 2) {
            oTen.style.borderColor = "red";
            chuoiLoi += "- Họ và Tên phải từ 2 ký tự trở lên.\n";
            hopLe = false;
        } else { oTen.style.borderColor = "green"; }

        if (sdt.length !== 10 || sdt.charAt(0) !== '0') {
            oSdt.style.borderColor = "red";
            chuoiLoi += "- Số điện thoại phải đúng 10 số và bắt đầu bằng số 0.\n";
            hopLe = false;
        } else { oSdt.style.borderColor = "green"; }

        if (email.indexOf('@') === -1) {
            oEmail.style.borderColor = "red";
            chuoiLoi += "- Email không hợp lệ (Thiếu ký tự @).\n";
            hopLe = false;
        } else { oEmail.style.borderColor = "green"; }

        if (xe === "") {
            oXe.style.borderColor = "red";
            chuoiLoi += "- Vui lòng chọn một dòng xe VinFast.\n";
            hopLe = false;
        } else { oXe.style.borderColor = "green"; }

        if (hopLe === false) {
            alert("Thông tin chưa đúng:\n\n" + chuoiLoi);
        } else {
            var thoiGian = new Date();
            var gio = thoiGian.toLocaleTimeString('vi-VN');
            var ngay = thoiGian.toLocaleDateString('vi-VN');

            form.innerHTML = `
                <div style="background: #d4edda; color: #155724; border: 1px solid #c3e6cb; padding: 20px; border-radius: 8px; line-height: 2;">
                    <h3 style="margin-bottom: 15px;">🎉 ĐĂNG KÝ LÁI THỬ THÀNH CÔNG!</h3>
                    <p><strong>Họ và Tên:</strong> ${ten}</p>
                    <p><strong>Số điện thoại:</strong> ${sdt}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Xe quan tâm:</strong> <span style="color: #0056D2; font-weight: bold;">${xe}</span></p>
                    <hr style="border: none; border-top: 1px dashed #ccc; margin: 15px 0;">
                    <p style="font-size: 0.9rem; color: #555;">⏱ <strong>Thời gian nhận:</strong> ${gio} | Ngày ${ngay}</p>
                    <button onclick="location.reload()" style="background: #155724; color: white; border: none; padding: 10px; width: 100%; border-radius: 5px; margin-top: 15px; cursor: pointer; font-weight: bold;">ĐĂNG KÝ LƯỢT MỚI</button>
                </div>
            `;
        }
    });
});