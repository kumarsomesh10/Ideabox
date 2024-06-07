import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './ideas.css';
import Cards from './cards/Cards';
import axios from 'axios';

const Ideas = () => {
  const userID = sessionStorage.getItem("id");
  const [formData, setFormData] = useState({
    title: '',
    body: ''
  });
  const [ideas, setIdeas] = useState([]);
  const [showContent, setShowContent] = useState(false);
  const [showUpdateBtn, setShowUpdateBtn] = useState(false);

  const show = () => {
    setShowContent(true);
  };

  useEffect(() => {
    const fetchIdeas = async () => {
      try {
        const response = await axios.get(`${window.location.origin}/api/idea/getidea/${userID}`);
        const fetchedIdeas = response.data.idea.map((t) => ({
          id: t._id,
          title: t.title,
          body: t.content
        }));
        setIdeas(fetchedIdeas);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    if (userID) {
      fetchIdeas();
    }
  }, [userID]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (userID) {
      try {
        const response = await axios.post(`${window.location.origin}/api/idea/addidea`, {
          title: formData.title,
          content: formData.body,
          id: userID
        });
        // console.log(response.data.list._id);
        setIdeas([...ideas, { ...formData, id: response.data.list._id }]);
        setFormData({ title: '', body: '' });
        setShowContent(false);
        toast.success("Idea added Successfully...");
      } catch (error) {
        console.error("Error adding idea:", error);
        toast.error("Error adding idea, please try again.");
      }
    } else {
      toast.info("Your Idea is not saved Please SignUp...");
    }
  };

  const deleteIdea = async (id) => {
    console.log(id);
    if (userID) {
      try {
        const response = await axios.delete(`${window.location.origin}/api/idea/deleteidea/${id}`, {
          data: { username: sessionStorage.getItem("username") }
        });
        console.log(response);
        toast.success("Idea Deleted Successfully...");
        setIdeas(ideas.filter((idea) => idea.id !== id));
      } catch (error) {
        console.error("There was an error deleting the idea!", error);
        toast.error("Error deleting idea, please try again.");
      }
    } else {
      toast.info("Please SignUp to delete your Idea...");
    }
  };

  const handleUpdates = async () => {
    const ideaId = sessionStorage.getItem("ideaId");
    sessionStorage.removeItem("ideaId");
    console.log(formData);
    if (userID && ideaId) {
      try {
        const response = await axios.put(`${window.location.origin}/api/idea/updateidea/${ideaId}`, {
          title: formData.title,
          content: formData.body,
          username: sessionStorage.getItem("username")
        });
        console.log(response);
        setIdeas(ideas.map((idea) => (idea.id === ideaId ? { ...formData, id: ideaId } : idea)));
        setFormData({ title: '', body: '' });
        setShowUpdateBtn(false);
        setShowContent(false);
        toast.success("Idea Updated Successfully...");
      } catch (error) {
        console.error("Error updating idea:", error);
        toast.error("Error updating idea, please try again.");
      }
    } else {
      toast.info("Please SignUp to Update your Idea...");
    }
  };

  const updateIdea = (id) => {
    sessionStorage.setItem("ideaId", id);
    const ideaToUpdate = ideas.find((idea) => idea.id === id);
    setFormData(ideaToUpdate);
    setShowContent(true);
    toast.info("Please Update your Idea...");
    setShowUpdateBtn(true);
  };

  return (
    <div className="idea-cont container mt-5">
      <ToastContainer autoClose={2000} hideProgressBar={true} />
      <h2 className="text-primary">Submit Your Idea</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            placeholder="Title..."
            value={formData.title}
            onClick={show}
            onChange={handleChange}
            required
          />
        </div>
        {showContent && (
          <div className="mb-3">
            <textarea
              className="form-control"
              id="body"
              name="body"
              placeholder="Content..."
              value={formData.body}
              onChange={handleChange}
              required
            />
          </div>
        )}
        {showUpdateBtn ? (
          <button type="button" onClick={handleUpdates} className="btn btn-primary">Update Idea</button>
        ) : (
          <button type="submit" className="btn btn-primary">Submit Idea</button>
        )}
      </form>
      {ideas.length > 0 && (
        <div className="mt-5">
          <h2>Previously Stored Ideas</h2>
          <Cards ideas={ideas} deleteIdea={deleteIdea} updateIdea={updateIdea} />
        </div>
      )}
    </div>
  );
};

export default Ideas;
