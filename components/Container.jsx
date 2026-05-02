export default function Container({ as: Tag = "div", className = "", children }) {
  const classes = ["mx-auto w-full max-w-[1280px] px-5 sm:px-6 lg:px-8", className]
    .filter(Boolean)
    .join(" ");

  return <Tag className={classes}>{children}</Tag>;
}
