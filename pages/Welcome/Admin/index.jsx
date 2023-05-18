import axios from "axios";
import jwt from "jsonwebtoken";
import Router from "next/router";
import { useRouter } from "next/navigation"
import React from "react";
import Url from "../../../components/ImgApi";
import Nav from "../../../components/admin/Nav";
import Table from "../../../components/util/table/Table";
import DBcon from "../../../database/connection";
import { toast } from "react-toastify";

const Index = ({ user }) => {
  const {push} = useRouter()
  const [data, setData] = React.useState([]);
  const [reload,setReaload ] = React.useState(1)


  // clunm 
  const colunm = [
  {
    Header: "ID",
    accessor: "id", // accessor is the "key" in the data
  },
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Photo",
    accessor: "img",
    Cell: (prop) => {
      return (
        <div className="h-16 relative">
          <img
            className="h-full"
            src={`${Url}/upload/${JSON.parse(prop.row.original.img)[0]}`}
            alt=""
          />
        </div>
      );
    },
  },
  {
    Header: "Catagory",
    accessor:"catagory"
  },
  {
    Header: "Types",
    accessor:"types"
  },
  {
    Header: "Price",
    accessor: "price",
  },

  {
    Header: "Action",
    Cell: (prop) => {
      return (
        <div class="inline-flex rounded-md shadow-sm" role="group">
          <button
            type="button"
            disabled={+prop.row.original.product > 1}

            onClick={(e)=>{DeleteTour(prop.row.original.id)}}

            class={`${
              +prop.row.original.product > 1 ? "cursor-not-allowed" : ""
            } px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white`}
          >
            delete
          </button>

          <button
            onClick={()=>{
              Router.push(`/Welcome/Admin/updateTour/${prop.row.original.id}`)}}
            type="button"
            class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-md hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
          >
            edit
          </button>
        </div>
      );
    },
  },
];
// colunm end 

  React.useEffect((e) => {
    const get = async () => {
      try {
        const serverres = await axios("/api/v1.0/tour");
        setData(serverres.data);
      } catch (error) {
        console.log(error);
      }
    };
    get()
  }, [reload]);

  const DeleteTour = async (id)=>{
    try {
      const datares = await toast.promise(axios.post("/api/v1.0/deleteTour",{id}),{pending:"wait",success:"Delete Successfully",error:"🤢 Something is Wrong !"},{position:"top-center"});
      setReaload((e)=>e+1);
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <div className="w-full relative">
      <Nav />
      <div className="w-full shadow-md p-10 bg-gradient-to-bl from-logoBlue/10 to-logoBlue/40">
        <div className="w-full relative flex justify-between items-center">
          <div className="">
            <h1 className="text-logoBlue font-bold text-2xl">
              Welcome {user.user}
            </h1>
          </div>
          <div>
          <button
              onClick={() => {
                Router.push("/Welcome/Admin/setpopuler");
              }}
              className="btn mr-4 btn-outline btn-secondary"
            >
              Setup populer
            </button>
            <button
              onClick={() => {
                Router.push("/Welcome/Admin/addTour");
              }}
              className="btn btn-outline btn-secondary"
            >
              Add new Tour
            </button>
          </div>
        </div>
      </div>
      <div className="w-full p-10 ">
        <Table datas={data} colunm={colunm} />
      </div>
    </div>
  );
};

export default Index;

export const getServerSideProps = async (ctx) => {
  let { sort } = ctx.req.cookies;

  let err = null;
  let Props = {
    user: null,
  };
  try {
    var decoded = jwt.verify(sort, process.env.JWTT);

    try {
      const DataBase = await DBcon();
      const { connection } = DataBase;
      const [data] = await connection.execute(
        `SELECT * FROM admin WHERE email="${decoded.email}"`
      );
      connection.end();

      if (data.length !== 0) {
        if (!+data[0].status) {
          return {
            redirect: {
              destination: "/Welcome/Admin/Login",
              permanent: false,
            },
          };
        }
      } else {
        return {
          redirect: {
            destination: "/Welcome/Admin/Login",
            permanent: false,
          },
        };
      }
    } catch (error) {
      console.log(error);
      return {
        redirect: {
          destination: "/Welcome/Admin/Login",
          permanent: false,
        },
      };
    }
    if (!decoded) {
      return {
        redirect: {
          destination: "/Welcome/Admin/Login",
          permanent: false,
        },
      };
    } else {
      Props.user = decoded;
    }
  } catch (e) {
    console.log(e);
    return {
      redirect: {
        destination: "/Welcome/Admin/Login",
        permanent: false,
      },
    };
  }
  return {
    props: Props,
  };
};
