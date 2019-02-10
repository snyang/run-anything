export default class ThemeManager {
  static onTheme(name) {
    switch (name) {
      case 'red':
        this.onRedTheme();
        break;

      case 'pink':
        this.onPinkTheme();
        break;

      case 'orange':
        this.onOrangeTheme();
        break;

      case 'yellow':
        this.onYellowTheme();
        break;

      case 'purple':
        this.onPurpleTheme();
        break;

      case 'green':
        this.onGreenTheme();
        break;

      case 'blue':
        this.onBlueTheme();
        break;

      case 'brown':
        this.onBrownTheme();
        break;

      default:
        this.onGrayTheme();
        break;
    }
  }

  static onGrayTheme() {
    document.body.style.setProperty("--dark-color", "black");
    document.body.style.setProperty("--gray-color", "gray");
    document.body.style.setProperty("--lightgray-color", "lightgray");
    document.body.style.setProperty("--light-color", "whitesmoke");
    document.body.style.setProperty("--font-color", "black");

  }

  static onRedTheme() {
    document.body.style.setProperty("--dark-color", "DarkRed ");
    document.body.style.setProperty("--gray-color", "IndianRed");
    document.body.style.setProperty("--lightgray-color", "LightCoral");
    document.body.style.setProperty("--light-color", "MistyRose");
    document.body.style.setProperty("--font-color", "DarkRed ");

  }

  static onPinkTheme() {
    document.body.style.setProperty("--dark-color", "MediumVioletRed ");
    document.body.style.setProperty("--gray-color", "DeepPink");
    document.body.style.setProperty("--lightgray-color", "LightPink");
    document.body.style.setProperty("--light-color", "LavenderBlush");
    document.body.style.setProperty("--font-color", "MediumVioletRed ");
  }

  static onOrangeTheme() {
    document.body.style.setProperty("--dark-color", "DarkOrange ");
    document.body.style.setProperty("--gray-color", "Tomato");
    document.body.style.setProperty("--lightgray-color", "LightSalmon");
    document.body.style.setProperty("--light-color", "Seashell");
    document.body.style.setProperty("--font-color", "DarkOrange ");
  }

  static onYellowTheme() {
    document.body.style.setProperty("--dark-color", "DarkKhaki ");
    document.body.style.setProperty("--gray-color", "Gold");
    document.body.style.setProperty("--lightgray-color", "LightYellow");
    document.body.style.setProperty("--light-color", "Ivory");
    document.body.style.setProperty("--font-color", "DarkKhaki ");
  }

  static onPurpleTheme() {
    document.body.style.setProperty("--dark-color", "DarkSlateBlue ");
    document.body.style.setProperty("--gray-color", "DarkViolet");
    document.body.style.setProperty("--lightgray-color", "Lavender");
    document.body.style.setProperty("--light-color", "AliceBlue");
    document.body.style.setProperty("--font-color", "DarkSlateBlue ");
  }


  static onGreenTheme() {
    document.body.style.setProperty("--dark-color", "DarkGreen ");
    document.body.style.setProperty("--gray-color", "SeaGreen");
    document.body.style.setProperty("--lightgray-color", "PaleGreen");
    document.body.style.setProperty("--light-color", "Honeydew");
    document.body.style.setProperty("--font-color", "DarkGreen ");
  }

  static onBlueTheme() {
    document.body.style.setProperty("--dark-color", "MidnightBlue ");
    document.body.style.setProperty("--gray-color", "SteelBlue");
    document.body.style.setProperty("--lightgray-color", "PaleTurquoise");
    document.body.style.setProperty("--light-color", "LightCyan");
    document.body.style.setProperty("--font-color", "MidnightBlue ");
  }

  static onBrownTheme() {
    document.body.style.setProperty("--dark-color", "Maroon ");
    document.body.style.setProperty("--gray-color", "Chocolate");
    document.body.style.setProperty("--lightgray-color", "Wheat");
    document.body.style.setProperty("--light-color", "Cornsilk");
    document.body.style.setProperty("--font-color", "Maroon ");
  }
}


