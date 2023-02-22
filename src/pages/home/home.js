import Layout from "../../components/home/Layout";

function Home({ user }) {
  const title = "Welcome to your favorite Helpdesk!";

  return (
    <div>
      <Layout user={user} title={title}>
        <p className="lead">We are here to help you, and provide you the best solutions.</p>
        <p className="lead">Do not hesitate, and visit your beloved website! :D</p>
      </Layout>
    </div>
  );
}

export default Home;
