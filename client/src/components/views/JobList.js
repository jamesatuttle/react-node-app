import React from "react";

function JobList() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/employment")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

    return (
        <div>
            {!data ? "Loading..." : data.map((job) => (
                <div>
                    <h3>{job.company}</h3>
                    <p>{job.jobtitle} {job.startdate} - {job.enddate}</p>
                </div>
            ))}
        </div>
    );
}

export default JobList;
