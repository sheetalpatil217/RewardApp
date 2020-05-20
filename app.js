var removeCategory;

$(document).ready(function () {
    let a = document.getElementById('A');
    let c1 = document.getElementById('C1');
    let c2 = document.getElementById('C2');
    let c3 = document.getElementById('C3');
    let c4 = document.getElementById('C4');
    let c5 = document.getElementById('C5');
    
    removeCategory = (el) => {
         var element = el;
         element.parentNode.remove();
    };

    Sortable.create(a, {
        animation: 200,
        group: {
            name: "shared",
            pull: "clone",
            revertClone: false,
            put: false,
        },
        sort: true,
        onEnd: function ( /**Event*/ evt) {
            let itemEl = evt.item; // dragged HTMLElement        
            itemEl.insertAdjacentHTML('beforeend', '<i class="fa fa-window-close" onclick="removeCategory(this)" aria-hidden="true"></i>');
        },
    });


    Sortable.create(c1, {
        group: "shared",
        sort: false,
    });
    Sortable.create(c2, {
        group: "shared",
        sort: false
    });
    Sortable.create(c3, {
        group: "shared",
        sort: false
    });
    Sortable.create(c4, {
        group: "shared",
        sort: false
    });
    Sortable.create(c5, {
        group: "shared",
        sort: false
    });

});