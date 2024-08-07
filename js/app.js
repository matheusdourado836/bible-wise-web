function ajustarDisplay() {
    var headerElement = document.getElementsByTagName('header')[0];
    var headerItems = document.querySelector(".items");
    var sidebar = document.getElementById('sidebar');
    var appTitle = document.getElementById("appTitle");
    var larguraDaTela = window.innerWidth;

    sidebar.classList.add("hide");

    if (larguraDaTela <= 767) {
        headerItems.classList.add("hide");
        appTitle.classList.add("hide");
        var iconElement = document.createElement('i');
        iconElement.classList.add('fa-solid', 'fa-bars');
        let drawer = document.createElement("div");
        drawer.style.cursor = "pointer";
        drawer.id = "toggleButton";
        drawer.style.paddingRight = "16px";
        drawer.appendChild(iconElement);
        headerElement.appendChild(drawer);
    } else {
      headerItems.classList.remove("hide");
    }

    document.getElementById('toggleButton').addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        toggleSidebar();
      });
  }

  ajustarDisplay();

  function toggleSidebar() {
    var body = document.getElementsByTagName('body')[0];
    body.classList.toggle('overflow');
    sidebar.classList.toggle('hide');
  }