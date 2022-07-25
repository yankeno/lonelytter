function TweetInput(props) {
  const textareaRef = React.useRef(null);
  const nameRef = React.useRef(null);
  const idRef = React.useRef(null);
  const iconRef = React.useRef(null);

  const sendTweet = React.useCallback(() => {
    if(textareaRef.current) {
      props.addTweet({
        id: new Date().getTime(),
        icon: iconRef.current.value,
        displayName: nameRef.current.value,
        accountName: idRef.current.value,
        content: textareaRef.current.value
      });
    }
  }, [textareaRef.current, props.addTweet]);

  return (
    <div>
      <div>やぁやぁ我こそは！
        <input 
          type="text" 
          placeholder="伊達 政宗"
          className="name"
          ref={nameRef}
        />
        也！！！
      </div>
      <div>アカウント名は！
        <input 
          type="text" 
          placeholder="single_eye_dragon" 
          ref={idRef}
        />也！！！！
      </div>
      <div>アイコン
        <input 
          type="text" 
          ref={iconRef}
          />
      </div>
      <div>
        <textarea 
          className="tweet-textarea" 
          ref={textareaRef} 
          placeholder="Tweetして奉り候">
        </textarea>
      </div>
      <div>
        <button 
          onClick={sendTweet} 
          className="send-tweet">
          申す！
        </button>
      </div>
    </div>
  )
}
