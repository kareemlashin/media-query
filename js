let height =
      100 - this.props.nav * (100 / document.documentElement.clientHeight)
    if (window.innerWidth <= 768 || window.innerWidth >= 767) {
      height = height / 1.5
    }
    if (window.innerWidth <= 1024 || window.innerWidth >= 769) {
      height = height / 1.5
    }
    if (window.innerWidth <= 767 ) {
      height = 50 ;
    }
    
