let successMessage = '<i class="fa-solid fa-circle-check"></i> You have successfully submitted!';
let errorMessage = '<i class="fa-solid fa-circle-xmark"></i> You have encountered an error.';
let invalidMessage = '<i class="fa-solid fa-circle-exclamation"></i> Invalid input. Try again.';

let toastBox = document.getElementById("toastBox");

function showToast(msg) {
    let toast = document.createElement("div");
    toast.classList.add("toast");
    toast.innerHTML = msg;
    toastBox.appendChild(toast);

    if(msg.includes('error')) {
        toast.classList.add('error');
    }

    if(msg.includes('Invalid')) {
        toast.classList.add('invalid');
    }

    setTimeout(()=>{
        toast.remove();
    }, 5000)

}
