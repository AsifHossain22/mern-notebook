import { ArrowLeftIcon } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router";

const CreatePage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen bg-base-200 ">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-lg mx-auto">
          <Link to={"/"} className="btn btn-ghost mb-6">
            <ArrowLeftIcon className="size-5" /> Back to Notes
          </Link>

          <div className="card bg-base-100">
            <div className="card-body items-center">
              <h2 className="card-title  w-full mx-auto text-2xl mb-4">
                Create New Note
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4 w-full">
                <div>
                  <fieldset className="fieldset">
                    <legend className="fieldset-legend">Title</legend>
                    <input
                      type="text"
                      className="input w-full"
                      placeholder="Note Title"
                    />
                  </fieldset>
                  <fieldset className="fieldset">
                    <legend className="fieldset-legend">Content</legend>
                    <textarea
                      className="textarea h-24 w-full"
                      placeholder="Write your note here..."
                    ></textarea>
                  </fieldset>
                </div>
                <div className="card-actions justify-end">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={loading}
                  >
                    {loading ? "Creating..." : "Create Note"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePage;
