const btn = document.querySelector('input[name="theme"]');
let html = document.documentElement;

btn.addEventListener('change', () => {
    if(btn.checked){
        html.setAttribute('data-theme' , 'dark');

    }
    else{
        html.setAttribute('data-theme' , 'light');
    }
} );


