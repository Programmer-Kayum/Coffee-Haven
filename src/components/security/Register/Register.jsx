import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Register = () => {
  const { createUser } = useContext(AuthContext);

  const [error, setError] = useState("");
  const [passwordStrength, setPasswordStrength] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [showPassword, setShowPassword] = useState(false); // State for toggling password visibility

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(file); // Save the selected image file
    }
  };

  const evaluatePasswordStrength = (password) => {
    const strengthCriteria = [
      { regex: /.{8,}/, message: "At least 8 characters" },
      { regex: /[A-Z]/, message: "At least 1 uppercase letter" },
      { regex: /[a-z]/, message: "At least 1 lowercase letter" },
      { regex: /\d/, message: "At least 1 number" },
      { regex: /[@$!%*?&]/, message: "At least 1 special character (@$!%*?&)" },
    ];

    const fulfilled = strengthCriteria.filter((criteria) =>
      criteria.regex.test(password)
    );
    const suggestions = strengthCriteria
      .filter((criteria) => !criteria.regex.test(password))
      .map((criteria) => criteria.message);

    setPasswordStrength({
      fulfilledCount: fulfilled.length,
      total: strengthCriteria.length,
      suggestions,
    });
  };

  const handlePasswordChange = (e) => {
    const password = e.target.value;
    evaluatePasswordStrength(password);
  };

  const navigate = useNavigate();
  const handleRegistrationSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name?.value;
    const email = e.target.email?.value;
    const password = e.target.password1?.value;
    const password2 = e.target.password?.value;

    if (password !== password2) {
      setError("Passwords do not match.");
      return;
    }

    if (passwordStrength?.fulfilledCount < passwordStrength?.total) {
      setError("Password does not meet strength requirements.");
      return;
    }

    createUser(email, password)
      .then((res) => {
        const email = res.user.email;
        const creationTime = res.user.metadata.creationTime;
        const lastSignInTime = res.user.metadata.lastSignInTime;

        const user = {
          name,
          email,
          creationTime,
          lastSignInTime,
          selectedImage,
        };
        console.log(user);

        fetch("http://localhost:5000/user", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(user),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              alert("Successfully registered!");
            }

            setTimeout(() => {
              navigate("/login"); // Use navigate to redirect
            }, 2000); // Optional delay for feedback
            return;
          })
          .catch((error) => setError(error));
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div>
      <div className="flex items-center mt-5 rounded-lg justify-center min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
        <div className="bg-white shadow-lg rounded-lg max-w-md w-full p-8 mx-4">
          <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">
            Register
          </h2>
          <form onSubmit={handleRegistrationSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Full Name
              </label>
              <input
                type="name"
                placeholder="Name"
                name="name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="email@example.com"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password1"
                  placeholder="********"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onChange={handlePasswordChange}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 hover:text-blue-500"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
              <div className="mt-2 text-sm">
                {passwordStrength?.fulfilledCount !== undefined && (
                  <>
                    <p className="font-semibold">
                      Password Strength: {passwordStrength.fulfilledCount}/
                      {passwordStrength.total}
                    </p>
                    {passwordStrength.suggestions.length > 0 && (
                      <ul className="text-red-500">
                        {passwordStrength.suggestions.map(
                          (suggestion, index) => (
                            <li key={index}>{suggestion}</li>
                          )
                        )}
                      </ul>
                    )}
                  </>
                )}
              </div>
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Confirm Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="********"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 hover:text-blue-500"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Profile Picture
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button
              type="submit"
              className="w-full py-2 mt-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Register
            </button>
          </form>
          <p className="text-center mt-4 text-gray-600">
            Already have an account?{" "}
            <Link to={"/email"} className="text-blue-500 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
