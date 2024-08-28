// import { useQuery } from "@tanstack/react-query";
// import useAuth from "../../../hocks/useAuth";
// // import useAxios from "../../../hocks/useAxios";





// const AdminHome = () => {
//     const { user } = useAuth();
    


//     const { data: state = {} } = useQuery({

//         queryKey: ['admin-state'],
//         queryFn: async () => {
//             const res = await ('/admin-stats');
//             return res.data;
//         }
//     })
//     return (
//         <div className="w-full m-4">
//             <h2 className="text-3xl">Welcome back, {user.displayName}</h2>

//             <div className="stats shadow mb-8">
//                 <div className="stat">
//                     <div className="stat-figure text-secondary">
//                         <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             fill="none"
//                             viewBox="0 0 24 24"
//                             className="inline-block h-8 w-8 stroke-current">
//                             <path
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                                 strokeWidth="2"
//                                 d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
//                         </svg>
//                     </div>
//                     <div className="stat-title">Revenue</div>
//                     <div className="stat-value">${state.revenue}</div>
//                     <div className="stat-desc">Jan 1st - Feb 1st</div>
//                 </div>

//                 <div className="stat">
//                     <div className="stat-figure text-secondary">
//                         <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             fill="none"
//                             viewBox="0 0 24 24"
//                             className="inline-block h-8 w-8 stroke-current">
//                             <path
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                                 strokeWidth="2"
//                                 d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
//                         </svg>
//                     </div>
//                     <div className="stat-title">New Users</div>
//                     <div className="stat-value">{state.users}</div>
//                     <div className="stat-desc">↗︎ 400 (22%)</div>
//                 </div>

//                 <div className="stat">
//                     <div className="stat-figure text-secondary">
//                         <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             fill="none"
//                             viewBox="0 0 24 24"
//                             className="inline-block h-8 w-8 stroke-current">
//                             <path
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                                 strokeWidth="2"
//                                 d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path>
//                         </svg>
//                     </div>
//                     <div className="stat-title">Menu Items</div>
//                     <div className="stat-value">{state. product}</div>
//                     <div className="stat-desc">↘︎ 90 (14%)</div>
//                 </div>

//                 <div className="stat">
//                     <div className="stat-figure text-secondary">
//                         <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             fill="none"
//                             viewBox="0 0 24 24"
//                             className="inline-block h-8 w-8 stroke-current">
//                             <path
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                                 strokeWidth="2"
//                                 d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path>
//                         </svg>
//                     </div>
//                     <div className="stat-title"> orders</div>
//                     <div className="stat-value">{state. orders}</div>
//                     <div className="stat-desc">↘︎ 90 (14%)</div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default AdminHome;
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hocks/useAuth";
import useAxios from "../../../hocks/useAxios";

const AdminHome = () => {
    const { user } = useAuth();
    const [axios] = useAxios();

    const { data: state = {} } = useQuery({
        queryKey: ['admin-state'],
        queryFn: async () => {
            const res = await axios('/admin-stats');
            return res.data;
        }
    });

    return (
        <div className="w-full m-4">
            <h2 className="text-3xl">Welcome back, {user.displayName}</h2>

            <div className="stats shadow mb-8">
                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            className="inline-block h-8 w-8 stroke-current">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                    </div>
                    <div className="stat-title">Revenue</div>
                    <div className="stat-value">${state.revenue || 0}</div>
                    <div className="stat-desc">Jan 1st - Feb 1st</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            className="inline-block h-8 w-8 stroke-current">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
                        </svg>
                    </div>
                    <div className="stat-title">New Users</div>
                    <div className="stat-value">{state.users || 0}</div>
                    <div className="stat-desc">↗︎ 400 (22%)</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            className="inline-block h-8 w-8 stroke-current">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path>
                        </svg>
                    </div>
                    <div className="stat-title">Menu Items</div>
                    <div className="stat-value">{state.product || 0}</div>
                    <div className="stat-desc">↘︎ 90 (14%)</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            className="inline-block h-8 w-8 stroke-current">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path>
                        </svg>
                    </div>
                    <div className="stat-title">Orders</div>
                    <div className="stat-value">{state.orders || 0}</div>
                    <div className="stat-desc">↘︎ 90 (14%)</div>
                </div>
            </div>
        </div>
    );
};

export default AdminHome;
