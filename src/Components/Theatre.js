import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { useNavigate, useParams } from "react-router-dom";
import { BiSquareRounded } from "react-icons/bi";
import env from "../environment";
import axios from "axios";
let selectedSeats = [];
const Theatre = () => {

  const navigate = useNavigate();
  const [row1, setRow1] = useState([
    { empty: true, selected: false },
    { empty: true, selected: false },
    { empty: true, selected: false },
    { empty: false, selected: false },
    { empty: true, selected: false },
    { empty: true, selected: false },
    { empty: true, selected: false },
    { empty: true, selected: false },
    { empty: true, selected: false },
    { empty: true, selected: false },
  ]);

  const [row2, setRow2] = useState([
    { empty: false, selected: false },
    { empty: true, selected: false },
    { empty: true, selected: false },
    { empty: true, selected: false },
    { empty: true, selected: false },
    { empty: false, selected: false },
    { empty: true, selected: false },
    { empty: false, selected: false },
    { empty: true, selected: false },
    { empty: true, selected: false },
  ]);

  const [row3, setRow3] = useState([
    { empty: true, selected: false },
    { empty: true, selected: false },
    { empty: true, selected: false },
    { empty: true, selected: false },
    { empty: true, selected: false },
    { empty: false, selected: false },
    { empty: true, selected: false },
    { empty: false, selected: false },
    { empty: true, selected: false },
    { empty: true, selected: false },
  ]);
  const [row4, setRow4] = useState([
    { empty: true, selected: false },
    { empty: true, selected: false },
    { empty: true, selected: false },
    { empty: true, selected: false },
    { empty: true, selected: false },
    { empty: true, selected: false },
    { empty: true, selected: false },
    { empty: true, selected: false },
    { empty: true, selected: false },
    { empty: true, selected: false },
  ]);

  const [row5, setRow5] = useState([
    { empty: true, selected: false },
    { empty: true, selected: false },
    { empty: true, selected: false },
    { empty: true, selected: false },
    { empty: true, selected: false },
    { empty: true, selected: false },
    { empty: true, selected: false },
    { empty: true, selected: false },
    { empty: true, selected: false },
    { empty: true, selected: false },
  ]);

  const [row6, setRow6] = useState([
    { empty: true, selected: false },
    { empty: true, selected: false },
    { empty: true, selected: false },
    { empty: true, selected: false },
    { empty: true, selected: false },
    { empty: true, selected: false },
    { empty: true, selected: false },
    { empty: true, selected: false },
    { empty: true, selected: false },
    { empty: true, selected: false },
  ]);

  const [row7, setRow7] = useState([
    { empty: true, selected: false },
    { empty: true, selected: false },
    { empty: true, selected: false },
    { empty: true, selected: false },
    { empty: true, selected: false },
    { empty: true, selected: false },
    { empty: true, selected: false },
    { empty: true, selected: false },
    { empty: true, selected: false },
    { empty: true, selected: false },
  ]);
  const [row8, setRow8] = useState([
    { empty: true, selected: false },
    { empty: true, selected: false },
    { empty: true, selected: false },
    { empty: true, selected: false },
    { empty: true, selected: false },
    { empty: true, selected: false },
    { empty: true, selected: false },
    { empty: true, selected: false },
    { empty: true, selected: false },
    { empty: true, selected: false },
  ]);

  const [row9, setRow9] = useState([
    { empty: true, selected: false },
    { empty: true, selected: false },
    { empty: true, selected: false },
    { empty: true, selected: false },
    { empty: true, selected: false },
    { empty: true, selected: false },
    { empty: true, selected: false },
    { empty: true, selected: false },
    { empty: true, selected: false },
    { empty: true, selected: false },
  ]);

  const [row10, setRow10] = useState([
    { empty: true, selected: false },
    { empty: true, selected: false },
    { empty: true, selected: false },
    { empty: true, selected: false },
    { empty: true, selected: false },
    { empty: true, selected: false },
    { empty: true, selected: false },
    { empty: true, selected: false },
    { empty: true, selected: false },
    { empty: true, selected: false },
  ]);




  const onSelectRow1 = (index) => {
    let tempRow = [];
    tempRow = row1;
    tempRow.map((item, ind) => {
      if (index === ind) {
        if (item.selected === true) {
          item.selected = false;
          item.empty = true;
        } else {
          item.selected = true;
          item.empty = false;
        }
      }
    });

    let tempSeats = [];
    tempRow.map((item) => {
      tempSeats.push(item);
    });
    setRow1(tempSeats);
  };

  const onSelectRow2 = (index) => {
    let tempRow = [];
    tempRow = row2;
    tempRow.map((item, ind) => {
      if (index === ind) {
        if (item.selected === true) {
          item.selected = false;
          item.empty = true;
        } else {
          item.selected = true;
          item.empty = false;
        }
      }
    });

    let tempSeats = [];
    tempRow.map((item) => {
      tempSeats.push(item);
    });
    setRow2(tempSeats);
  };

  const onSelectRow3 = (index) => {
    let tempRow = [];
    tempRow = row3;
    tempRow.map((item, ind) => {
      if (index === ind) {
        if (item.selected === true) {
          item.selected = false;
          item.empty = true;
        } else {
          item.selected = true;
          item.empty = false;
        }
      }
    });

    let tempSeats = [];
    tempRow.map((item) => {
      tempSeats.push(item);
    });
    setRow3(tempSeats);
  };

  const onSelectRow4 = (index) => {
    let tempRow = [];
    tempRow = row4;
    tempRow.map((item, ind) => {
      if (index === ind) {
        if (item.selected === true) {
          item.selected = false;
          item.empty = true;
        } else {
          item.selected = true;
          item.empty = false;
        }
      }
    });

    let tempSeats = [];
    tempRow.map((item) => {
      tempSeats.push(item);
    });
    setRow4(tempSeats);
  };

  const onSelectRow5 = (index) => {
    let tempRow = [];
    tempRow = row5;
    tempRow.map((item, ind) => {
      if (index === ind) {
        if (item.selected === true) {
          item.selected = false;
          item.empty = true;
        } else {
          item.selected = true;
          item.empty = false;
        }
      }
    });

    let tempSeats = [];
    tempRow.map((item) => {
      tempSeats.push(item);
    });
    setRow5(tempSeats);
  };
  const onSelectRow6 = (index) => {
    let tempRow = [];
    tempRow = row6;
    tempRow.map((item, ind) => {
      if (index === ind) {
        if (item.selected === true) {
          item.selected = false;
          item.empty = true;
        } else {
          item.selected = true;
          item.empty = false;
        }
      }
    });

    let tempSeats = [];
    tempRow.map((item) => {
      tempSeats.push(item);
    });
    setRow6(tempSeats);
  };

  const onSelectRow7 = (index) => {
    let tempRow = [];
    tempRow = row7;
    tempRow.map((item, ind) => {
      if (index === ind) {
        if (item.selected === true) {
          item.selected = false;
          item.empty = true;
        } else {
          item.selected = true;
          item.empty = false;
        }
      }
    });

    let tempSeats = [];
    tempRow.map((item) => {
      tempSeats.push(item);
    });
    setRow7(tempSeats);
  };

  const onSelectRow8 = (index) => {
    let tempRow = [];
    tempRow = row8;
    tempRow.map((item, ind) => {
      if (index === ind) {
        if (item.selected === true) {
          item.selected = false;
          item.empty = true;
        } else {
          item.selected = true;
          item.empty = false;
        }
      }
    });

    let tempSeats = [];
    tempRow.map((item) => {
      tempSeats.push(item);
    });
    setRow8(tempSeats);
  };

  const onSelectRow9 = (index) => {
    let tempRow = [];
    tempRow = row9;
    tempRow.map((item, ind) => {
      if (index === ind) {
        if (item.selected === true) {
          item.selected = false;
          item.empty = true;
        } else {
          item.selected = true;
          item.empty = false;
        }
      }
    });

    let tempSeats = [];
    tempRow.map((item) => {
      tempSeats.push(item);
    });
    setRow9(tempSeats);
  };

  const onSelectRow10 = (index) => {
    let tempRow = [];
    tempRow = row10;
    tempRow.map((item, ind) => {
      if (index === ind) {
        if (item.selected === true) {
          item.selected = false;
          item.empty = true;
        } else {
          item.selected = true;
          item.empty = false;
        }
      }
    });

    let tempSeats = [];
    tempRow.map((item) => {
      tempSeats.push(item);
    });
    setRow10(tempSeats);
    console.log(tempSeats);
  };

  const getAllSeats = () => {
    let selectedSeats = [];
    row1.map((item) => {
      if (item.selected === true) {
        selectedSeats.push(1);
      }
    });
    row2.map((item) => {
      if (item.selected === true) {
        selectedSeats.push(1);
      }
    });
    row3.map((item) => {
      if (item.selected === true) {
        selectedSeats.push(1);
      }
    });
    row4.map((item) => {
      if (item.selected === true) {
        selectedSeats.push(1);
      }
    });
    row5.map((item) => {
      if (item.selected === true) {
        selectedSeats.push(1);
      }
    });
    row6.map((item) => {
      if (item.selected === true) {
        selectedSeats.push(1);
      }
    });
    row7.map((item) => {
      if (item.selected === true) {
        selectedSeats.push(1);
      }
    });
    row8.map((item) => {
      if (item.selected === true) {
        selectedSeats.push(1);
      }
    });
    row9.map((item) => {
      if (item.selected === true) {
        selectedSeats.push(1);
      }
    });

    row10.map((item) => {
      if (item.selected === true) {
        selectedSeats.push(1);
      }
    });
    return selectedSeats.length;
  };

  const saveSeats = () => {
    navigate("/payment");
  };

  return (
    <>
      <div className="movie-hall">
        <div className="book-title">
          <div>
            <h1 className="fav-seat">Book your favourite seat</h1>
          </div>
          {/* <div>
            <Button
              class="all-theatre"
              variant="primary"
              onClick={() => navigate("/theatreDetails")}
            >
              AllTheatre
            </Button>
          </div> */}
        </div>

        <div className="movie-container">
          {/* <label>Select a movie</label>
          <select id="movie">
            <option value="10">Dabbang ($10)</option>
            <option value="20">Chak de India ($20)</option>
            <option value="25">Bhahubali ($25)</option>
            <option value="15">Raone ($15)</option>
          </select> */}
        </div>
        <ul className="showcase">
          <li>
            <div className="seat"></div>
            <small>N/A</small>
          </li>
          <li>
            <div className="seat selected"></div>
            <small>selected</small>
          </li>
          <li>
            <div className="seat occupied"></div>
            <small>Occupied</small>
          </li>
        </ul>
        <div className="seat-container">
          <div className="screen"></div>
          <div className="movie-row">
            {row1.map((item, index) => {
              return (
                <div key={index}>
                  <div
                    onClick={() => {
                      if (item.selected === false && item.empty === false) {
                        alert("Already booked");
                      } else {
                        onSelectRow1(index);
                      }
                    }}
                  >
                    {item.empty === false && item.selected === true ? (
                      <div>
                        <BiSquareRounded
                          style={{ backgroundColor: "green", margin: "5px" }}
                        />
                      </div>
                    ) : item.empty === true && item.selected === false ? (
                      <div>
                        <BiSquareRounded style={{ margin: "5px" }} />
                      </div>
                    ) : item.empty === false && item.selected === false ? (
                      <div>
                        <BiSquareRounded
                          style={{ backgroundColor: "8e8e8e", margin: "5px" }}
                        />
                      </div>
                    ) : null}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="movie-row">
            {row2.map((item, index) => {
              return (
                <div key={index}>
                  <div
                    onClick={() => {
                      if (item.selected == false && item.empty == false) {
                        alert("Already booked");
                      } else {
                        onSelectRow2(index);
                      }
                    }}
                  >
                    {item.empty == false && item.selected == true ? (
                      <div>
                        <BiSquareRounded
                          style={{ backgroundColor: "green", margin: "5px" }}
                        />
                      </div>
                    ) : item.empty == true && item.selected == false ? (
                      <div>
                        <BiSquareRounded style={{ margin: "5px" }} />
                      </div>
                    ) : item.empty == false && item.selected == false ? (
                      <div>
                        <BiSquareRounded
                          style={{ backgroundColor: "8e8e8e", margin: "5px" }}
                        />
                      </div>
                    ) : null}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="movie-row">
            {row3.map((item, index) => {
              return (
                <div key={index}>
                  <div
                    onClick={() => {
                      if (item.selected == false && item.empty == false) {
                        alert("Already booked");
                      } else {
                        onSelectRow3(index);
                      }
                    }}
                  >
                    {item.empty == false && item.selected == true ? (
                      <div>
                        <BiSquareRounded
                          style={{ backgroundColor: "green", margin: "5px" }}
                        />
                      </div>
                    ) : item.empty == true && item.selected == false ? (
                      <div>
                        <BiSquareRounded style={{ margin: "5px" }} />
                      </div>
                    ) : item.empty == false && item.selected == false ? (
                      <div>
                        <BiSquareRounded
                          style={{ backgroundColor: "8e8e8e", margin: "5px" }}
                        />
                      </div>
                    ) : null}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="movie-row">
            {row4.map((item, index) => {
              return (
                <div key={index}>
                  <div
                    onClick={() => {
                      if (item.selected == false && item.empty == false) {
                        alert("Already booked");
                      } else {
                        onSelectRow4(index);
                      }
                    }}
                  >
                    {item.empty == false && item.selected == true ? (
                      <div>
                        <BiSquareRounded
                          style={{ backgroundColor: "green", margin: "5px" }}
                        />
                      </div>
                    ) : item.empty == true && item.selected == false ? (
                      <div>
                        <BiSquareRounded style={{ margin: "5px" }} />
                      </div>
                    ) : item.empty == false && item.selected == false ? (
                      <div>
                        <BiSquareRounded
                          style={{ backgroundColor: "8e8e8e", margin: "5px" }}
                        />
                      </div>
                    ) : null}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="movie-row">
            {row5.map((item, index) => {
              return (
                <div key={index}>
                  <div
                    onClick={() => {
                      if (item.selected == false && item.empty == false) {
                        alert("Already booked");
                      } else {
                        onSelectRow5(index);
                      }
                    }}
                  >
                    {item.empty == false && item.selected == true ? (
                      <div>
                        <BiSquareRounded
                          style={{ backgroundColor: "green", margin: "5px" }}
                        />
                      </div>
                    ) : item.empty == true && item.selected == false ? (
                      <div>
                        <BiSquareRounded style={{ margin: "5px" }} />
                      </div>
                    ) : item.empty == false && item.selected == false ? (
                      <div>
                        <BiSquareRounded
                          style={{ backgroundColor: "8e8e8e", margin: "5px" }}
                        />
                      </div>
                    ) : null}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="movie-row">
            {row6.map((item, index) => {
              return (
                <div key={index}>
                  <div
                    onClick={() => {
                      if (item.selected == false && item.empty == false) {
                        alert("Already booked");
                      } else {
                        onSelectRow6(index);
                      }
                    }}
                  >
                    {item.empty == false && item.selected == true ? (
                      <div>
                        <BiSquareRounded
                          style={{ backgroundColor: "green", margin: "5px" }}
                        />
                      </div>
                    ) : item.empty == true && item.selected == false ? (
                      <div>
                        <BiSquareRounded style={{ margin: "5px" }} />
                      </div>
                    ) : item.empty == false && item.selected == false ? (
                      <div>
                        <BiSquareRounded
                          style={{ backgroundColor: "8e8e8e", margin: "5px" }}
                        />
                      </div>
                    ) : null}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="movie-row">
            {row7.map((item, index) => {
              return (
                <div key={index}>
                  <div
                    onClick={() => {
                      if (item.selected == false && item.empty == false) {
                        alert("Already booked");
                      } else {
                        onSelectRow7(index);
                      }
                    }}
                  >
                    {item.empty == false && item.selected == true ? (
                      <div>
                        <BiSquareRounded
                          style={{ backgroundColor: "green", margin: "5px" }}
                        />
                      </div>
                    ) : item.empty == true && item.selected == false ? (
                      <div>
                        <BiSquareRounded style={{ margin: "5px" }} />
                      </div>
                    ) : item.empty == false && item.selected == false ? (
                      <div>
                        <BiSquareRounded
                          style={{ backgroundColor: "8e8e8e", margin: "5px" }}
                        />
                      </div>
                    ) : null}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="movie-row">
            {row8.map((item, index) => {
              return (
                <div key={index}>
                  <div
                    onClick={() => {
                      if (item.selected == false && item.empty == false) {
                        alert("Already booked");
                      } else {
                        onSelectRow8(index);
                      }
                    }}
                  >
                    {item.empty == false && item.selected == true ? (
                      <div>
                        <BiSquareRounded
                          style={{ backgroundColor: "green", margin: "5px" }}
                        />
                      </div>
                    ) : item.empty == true && item.selected == false ? (
                      <div>
                        <BiSquareRounded style={{ margin: "5px" }} />
                      </div>
                    ) : item.empty == false && item.selected == false ? (
                      <div>
                        <BiSquareRounded
                          style={{ backgroundColor: "8e8e8e", margin: "5px" }}
                        />
                      </div>
                    ) : null}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="movie-row">
            {row9.map((item, index) => {
              return (
                <div key={index}>
                  <div
                    onClick={() => {
                      if (item.selected == false && item.empty == false) {
                        alert("Already booked");
                      } else {
                        onSelectRow9(index);
                      }
                    }}
                  >
                    {item.empty == false && item.selected == true ? (
                      <div>
                        <BiSquareRounded
                          style={{ backgroundColor: "green", margin: "5px" }}
                        />
                      </div>
                    ) : item.empty == true && item.selected == false ? (
                      <div>
                        <BiSquareRounded style={{ margin: "5px" }} />
                      </div>
                    ) : item.empty == false && item.selected == false ? (
                      <div>
                        <BiSquareRounded
                          style={{ backgroundColor: "8e8e8e", margin: "5px" }}
                        />
                      </div>
                    ) : null}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="movie-row">
            {row10.map((item, index) => {
              return (
                <div key={index}>
                  <div
                    onClick={() => {
                      if (item.selected === false && item.empty === false) {
                        alert("Already booked");
                      } else {
                        onSelectRow10(index);
                      }
                    }}
                  >
                    {item.empty === false && item.selected === true ? (
                      <div>
                        <BiSquareRounded
                          style={{ backgroundColor: "green", margin: "5px" }}
                        />
                      </div>
                    ) : item.empty === true && item.selected === false ? (
                      <div>
                        <BiSquareRounded style={{ margin: "5px" }} />
                      </div>
                    ) : item.empty === false && item.selected === false ? (
                      <div>
                        <BiSquareRounded
                          style={{ backgroundColor: "8e8e8e", margin: "5px" }}
                        />
                      </div>
                    ) : null}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="bookprice">
          <div>
            <p className="text">
              you have selected <span>{getAllSeats()}</span> seats for a price
              of $ <span id="total"> 0</span>
            </p>
          </div>
          <div className="bookbtn">
            <Button variant="success" onClick={() => saveSeats()}>
              Book Now
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Theatre;
