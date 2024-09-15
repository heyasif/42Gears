import Layout from "../components/Layout";
import Table from "../components/Table";

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Projects</h1>
      <Table />
    </div>
  );
}
