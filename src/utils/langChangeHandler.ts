const langChangeHandler = (Lang: string) => {
  if (Lang === "fa") {
    document.documentElement.dir = "rtl";
    document.documentElement.lang = "fa";
    document.documentElement.classList.remove("font-roboto");
    document.documentElement.classList.add("font-lalezar");
  } else if (Lang === "en") {
    document.documentElement.dir = "ltr";
    document.documentElement.lang = "en";
    document.documentElement.classList.remove("font-lalezar");
    document.documentElement.classList.add("font-roboto");
  }
};

export default langChangeHandler;
