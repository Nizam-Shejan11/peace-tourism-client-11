import React from "react";

const Blogs = () => {
  return (
    <div>
      <div>
        <h3>QSN: Difference between SQL and NoSQL ??</h3>
        <h6>
          ANS: SQL is the programming language used to interface with relational
          databases. (Relational databases model data as records in rows and
          tables with logical links between them). NoSQL is a class of DBMs that
          are non-relational and generally do not use SQL.
        </h6>
      </div>
      <div>
        <h3>QSN: What is JWT, and how does it work ??</h3>
        <h6>
          ANS: JSON Web Token (JWT) is an open standard (RFC 7519) that defines
          a compact and self-contained way for securely transmitting information
          between parties as a JSON object. This information can be verified and
          trusted because it is digitally signed.
        </h6>
      </div>
      <div>
        <h3>QSN: What is the difference between javascript and NodeJS ??</h3>
        <h6>
          ANS: JavaScript is a simple programming language that can be used with
          any browser that has the JavaScript Engine installed. Node. js, on the
          other hand, is an interpreter or execution environment for the
          JavaScript programming language.
        </h6>
      </div>
      <div>
        <h3>
          QSN: How does NodeJS handle multiple requests at the same time ??
        </h3>
        <h6>
          ANS: How NodeJS handle multiple client requests? NodeJS receives
          multiple client requests and places them into EventQueue. NodeJS is
          built with the concept of event-driven architecture. NodeJS has its
          own EventLoop which is an infinite loop that receives requests and
          processes them.
        </h6>
      </div>
    </div>
  );
};

export default Blogs;
