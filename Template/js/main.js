$(function(){

    function onEntry(entry) {
        entry.forEach(change => {
          if (change.isIntersecting) {
           change.target.classList.add('element-show');
          }
        });
      }
      
      let options = {
        threshold: [0.9] };
      let observer = new IntersectionObserver(onEntry, options);
      let elements = document.querySelectorAll('.header__title,.header__text,.header__content-img,.services__content-title,.services__content-text,.reviews__title,.reviews__subtitle,.banner__title,.banner__text,.banner__link,.footer__decor');
      
      for (let elm of elements) {
        observer.observe(elm);
      }

});