import React, { useState, useEffect } from "react";
import axios from "axios";
import PropertyBanner from "../../component/PropertyBanner/PropertyBanner";
import PropertySorting from "../../component/PropertySorting/PropertySorting";
import Posts from "../../component/Posts/Posts";
import Pagination from "../../component/Pagination/Pagination";
import useTitle from "../../hooks/useTitle";

const AllProperty = () => {
  const [posts, setPosts] = useState([]);
  console.log(posts);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(9);
  useTitle('All Property')


  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get("http://localhost:5000/productCollection");
      setPosts(res.data);
      setLoading(false);
    };

    fetchPosts();
  }, []);



  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  console.log(currentPosts);
  //change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);


  //handle form
  const handleForm = (event) => {
    event.preventDefault();


    // price 

    const price = event.target.price.value


    // city 
    const city = event.target.city.value

    // rent type 
    const rentType = event.target.rentType;
    console.log(rentType);
    const rentCheck = Object.values(rentType).filter(rent => rent.checked === true);
    const rentCheckValue = rentCheck.map(check => {
      return check.value
    })


    const month = event.target.month.value

    // bed 

    const bedAmount = event.target.bed;
    const bedCheck = Object.values(bedAmount).filter(bed => bed.checked === true);
    const bedCheckValue = bedCheck.map(check => {
      return check.value
    })



    // wash

    const washAmount = event.target.wash;
    const washCheck = Object.values(washAmount).filter(wash => wash.checked === true);
    const washCheckValue = washCheck.map(check => {
      return check.value
    })

    fetch(`http://localhost:5000/productCollection?price=${price}&city=${city}&rentType=${rentCheckValue}&bedAmount=${bedCheckValue}&washAmount=${washCheckValue}&month=${month}`)
      .then(res => res.json())
      .then(data => setPosts(data))


  }
  return (
    <div>
      <div className="banner-section">
        <PropertyBanner></PropertyBanner>
      </div>
      <div className="container">
        <h3 className="mt-5 fw-bolder">Search results:-</h3>
        <div className="row">
          <div className="col-md-3 col-lg-3 col-sm-12">
            <PropertySorting handleForm={handleForm}></PropertySorting>
          </div>
          <div className="col-md-9 col-lg-9 col-sm-12">
            <div className="ms-4">
              <h3 className="fw-bolder">Apartments in Dhaka</h3>
              <span>{posts.length} results. Jul 12-2022</span>
            </div>
            <div className="all-property-card">
              <Posts posts={currentPosts} loading={loading}></Posts>

              <Pagination
                postsPerPage={postsPerPage}
                totalPosts={posts.length}
                paginate={paginate}
              ></Pagination>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProperty;