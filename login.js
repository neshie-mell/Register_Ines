document.getElementById("loginForm").addEventListener("submit",
    function(e){
        e.preventDefault();

        const loginEmail=document.getElementById("loginEmail").value;
        const loginPassword=document.getElementById("loginPassword").value;

        const storedUser = JSON.parse(localStorage.getItem(loginEmail));

        if (storedUser && storedUser.passwordd === loginPassword) {
            alert("Login Berhasil yaw" + storedUser.nama + "!");
        }
        else {
            alert("yahh data yang kamu masukan salah nich");
        }
    }
);