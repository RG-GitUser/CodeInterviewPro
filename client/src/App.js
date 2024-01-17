import React, { useState } from "react";
import { ChakraBaseProvider, extendBaseTheme, theme as chakraTheme } from "@chakra-ui/react";
import "./App.css";
import { QuestionForm, Header, Quiz, StartQuiz, Footer, About, Contact } from "./Components";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ApolloProvider, ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import LoginForm from "./Components/Login/Login";
import SignupForm from "./Components/Signup/Signup";
import Logout from "./Components/Logout/Logout";
import Auth from "./utils/auth";

const { Button } = chakraTheme.components;

// Create an ApolloClient instance
const client = new ApolloClient({
  link: new HttpLink({ uri: "http://localhost:3001/graphql" }),
  cache: new InMemoryCache(),
});

const theme = extendBaseTheme({
  components: {
    Button,
  },
});

function App() {
  if (!Auth.loggedIn()) {
    return (
      <ApolloProvider client={client}>
        <Router>
          <div className="App">
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Header />
                    <LoginForm />
                  </>
                }
              ></Route>
              <Route
                path="/login"
                element={
                  <>
                    <Header />
                    <LoginForm />
                  </>
                }
              ></Route>
              {!Auth.loggedIn() && (
                <Route
                  path="/signup"
                  element={
                    <>
                      <Header />
                      <SignupForm />
                    </>
                  }
                />
              )}
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
          </div>
        </Router>
      </ApolloProvider>
    );
  }

  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            {Auth.loggedIn() && <Route path="/add-question" element={<AddQuestion />} />}
            {Auth.loggedIn() ? (
              <Route
                path="/logout"
                element={
                  <>
                    <Header />
                    <Logout />
                  </>
                }
              />
            ) : (
              <Route path="/login" element={<LoginForm />} />
            )}
            {!Auth.loggedIn() && <Route path="/signup" element={<SignupForm />} />}
          </Routes>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

// React component for Home
function Home() {
  const initialCategories = ["MongoDB", "Express", "React", "Node", "JavaScript Fundamentals", "RESTful API", "GraphQL"];
  const [activeCategories, setActiveCategories] = useState([]);
  const [quizStarted, setQuizStarted] = useState(false);
  const [data, setData] = useState(null);

  function resetQuiz() {
    setQuizStarted(false);
    setActiveCategories([]);
  }

  return (
    <>
      <Header onHomeClick={resetQuiz} />
      {quizStarted && data ? (
        <Quiz questions={data.startQuiz.questions} />
      ) : (
        <StartQuiz
          activeCategories={activeCategories}
          initialCategories={initialCategories}
          git
          setActiveCategories={setActiveCategories}
          setQuizStarted={setQuizStarted}
          setData={setData}
        />
      )}
    </>
  );
}

// React component for AddQuestion
function AddQuestion() {
  return (
    <div>
      <Header />

      <QuestionForm />
    </div>
  );
}

export default App;
