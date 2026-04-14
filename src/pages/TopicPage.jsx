import Feed from "../components/feed/Feed.jsx";

export default function TopicPage({ topic }) {
  return <Feed topicFilter={topic} />;
}
