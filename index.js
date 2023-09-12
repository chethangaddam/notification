const Notification = (props) => {
  //  Write your code here.
  const { notificationText, className, iconUrl } = props;
  return (
    <div class={`box ${className}`}>
      <img className="icon" src={iconUrl} />
      <p>{notificationText}</p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div class="background-main">
    <h1> Notification </h1>
    <div>
      <Notification
        notificationText="Information Message"
        className="info"
        iconUrl="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
      />
      <Notification
        notificationText="Success Message"
        className="success"
        iconUrl="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
