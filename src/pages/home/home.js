import Layout from "../../components/home/Layout";

function Home({user}) {
    console.log("userss", user);

  return (
    <div>
      <Layout user={user}>
        </Layout>
    </div>
  );
}

export default Home;
