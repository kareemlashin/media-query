let height =
      100 - this.props.nav * (100 / document.documentElement.clientHeight)

    if (window.innerWidth == 768 || window.innerWidth == 767) {
      height = 50
    }else

    if (
      window.innerWidth <= 1024 ||
      (window.innerWidth >= 769 && window.innerWidth <= 1300)
    ) {
      height = height / 1.5
    }else

    if (window.innerWidth <= 767) {
      height = 50
    }else

    if (window.innerWidth == 1366 || window.innerWidth <= 1366) {
      height = height
    }
    else if (window.innerWidth >= 1370 ) {
      height = 50
    }
    
