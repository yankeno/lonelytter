function App() {
  const [tweets, setTweets] = React.useState([
    {
      icon: "😸",
      displayName: "にゃ太郎",
      accountName: "nya_tarou",
      content: "みゃお" ,
    },
    {
      icon: "🐶",
      displayName: "犬ドッグ",
      accountName: "dog_yasha",
      content: "わおーん",
    },
  ]);

  const addTweet = React.useCallback((tweet) => setTweets((prev) => [tweet, ...prev]), [setTweets]);

  return (
    <div>
      <TweetInput addTweet={addTweet} />
      <Timeline tweets={tweets} />
    </div>
  )
}

const target = document.querySelector('#app');
ReactDOM.render(<App/>, target);
