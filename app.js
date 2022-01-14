const mainHeading = document.querySelector('h1');

document.addEventListener('click', (event, v) => {
    console.log(event);
    //console.log('document get clicked');
    if (mainHeading.classList.contains('magenta')) {
        mainHeading.classList.remove('magenta');
        mainHeading.classList.add('white');
    } else {
        mainHeading.classList.toggle('white');
        mainHeading.classList.toggle('purple');
    }
});

const controller = new AbortController();


mainHeading.addEventListener('mouseenter', magenta, { signal: controller.signal });
//mainHeading.addEventListener('mouseenter', magenta, false);

function magenta(event) {
    console.log('Mouse Entered on Heading');
    console.log(event);
    if (mainHeading.classList.contains('white')) {
        mainHeading.classList.remove('white');
        mainHeading.classList.add('magenta');
        controller.abort();
    }
    if (mainHeading.classList.contains('purple')) {
        mainHeading.classList.remove('purple');
        mainHeading.classList.add('magenta');
        controller.abort();
    }
}