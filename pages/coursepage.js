import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import CourseCard from '../components/cards/CourseCard.js';
import ReactPaginate from 'react-paginate';
import { Box } from "@mui/material";
import LoadingBox from '../components/layouts/loadingBox.js';

const CoursePage = () => {
  const [courses, setCourses] = useState([]);
  const [limit, setLimit] = useState(6);
  const [pageCount, setPageCount] = useState(1);
  const currentPage = useRef(1);
  const [loading, setLoading] = useState(true);
  const [loadingPagination, setLoadingPagination] = useState(false); 
  const [loadingLimitChange, setLoadingLimitChange] = useState(false);

  // Optimized data fetching function
  const fetchPaginatedCourses = async () => {
    try {
      setLoadingPagination(true); // Set loading for pagination
      const response = await axios.get(`/api/pagination?page=${currentPage.current}&limit=${limit}`);
      const data = response.data;
      setPageCount(data.pageCount);
      setCourses(data.result);
    } catch (error) {
      console.error("Error fetching paginated courses:", error);
    } finally {
      setLoadingPagination(false); // Clear loading for pagination
    }
  };

  // Load initial data and set up the pagination
  useEffect(() => {
    fetchPaginatedCourses();
    setLoading(false);
  }, [limit]);

  // Pagination
  const handlePageClick = (e) => {
    currentPage.current = e.selected + 1;
    fetchPaginatedCourses();
  };

  // Change the number of items displayed per page
  const handleLimitChange = (newLimit) => {
    setLoadingLimitChange(true); // Set loading for limit change
    setLimit(newLimit);
    currentPage.current = 1;
    fetchPaginatedCourses();
    setLoadingLimitChange(false); // Clear loading for limit change
  };

  return (
    <>
      {/* Components page */}
      {/* <hr /> */}
      <div className="container-fluid">
        {loading || loadingPagination || loadingLimitChange ? (
          <LoadingBox />
        ) : courses && courses.length === 0 ? (
          <Box
            sx={{
              minHeight: '350px',
              display: 'flex', 
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <h2>No courses found</h2>
          </Box>
        ) : (
          <div className="row">
            {courses &&
              courses.map((course) => (
                <div key={course._id} className="col-md-4">
                  <CourseCard course={course} />
                </div>
              ))}
          </div>
        )}

        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          containerClassName="pagination justify-content-center"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          activeClassName="active"
        />
        {/* Add a dropdown for changing the number of items per page */}
        <div>
          <select
            onChange={(e) => handleLimitChange(Number(e.target.value))}
            value={limit}
            style={{
              padding: '5px',
              fontSize: '16px',
              borderRadius: '5px',
              borderColor: '#ccc',
              backgroundColor: '#f5f5f5',
              marginBottom: '10px',
            }}
          >
            <option value="6">6 per page</option>
            <option value="12">12 per page</option>
            <option value="24">24 per page</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default CoursePage;
