var menu = {
  'menu': [{
    'list_title': '常用指令',
    'href': 'A',
    'role_ids': [],
    'sub_list': []
  }, {
    'list_title': 'B功能',
    'href': '/B.html',
    'role_ids': [],
    'sub_list': []
  }, {
    'list_title': 'C功能',
    'href': '/C.html',
    'role_ids': [],
    'sub_list': []
  }]
}

var setManu = (() => {
  var menubar1 = document.querySelector(`#menu_bar`)
  var menubar2 = document.querySelector(`#navDemo`)
  for (var x in menu.menu) {
    let a1 = document.createElement(`a`)
    let a2 = document.createElement(`a`)
    a1.innerHTML = menu.menu[x].list_title
    a1.setAttribute(`href`, menu.menu[x].href)
    a1.setAttribute(`class`, `w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white`)
    menubar1.appendChild(a1)
    // mobile bar
    a2.innerHTML = menu.menu[x].list_title
    a2.setAttribute(`href`, menu.menu[x].href)
    a2.setAttribute(`class`, `w3-bar-item w3-button w3-padding-large`)
    menubar2.appendChild(a2)
  }
})();

(() => {
  let len = 150
  let textobj = document.querySelector(`.w3-text-grey`)
  let textarry = document.querySelector(`.w3-text-grey`).textContent.split(``)
  textarry.forEach((element, index) => {
    if (index > len) {
      textobj.setAttribute(`tittle`, textobj.textContent)
      let text = textobj.textContent.substring(0, len - 1) + `...`
      textobj.textContent = text
    }
  })
})()

