const columns = [
  {name: "RANK", uid: "rank", sortable: true},
  {name: "DEVELOPER", uid: "developer"},
  {name: "STREAK", uid: "streak", sortable: true},
  {name: "CONTRIBUTIONS", uid: "contributions", sortable: true},
  {name: "ROLE", uid: "role", sortable: true},
  {name: "STATUS", uid: "status"},
];

const statusOptions = [
  {name: "Active", uid: "active"},
  {name: "Paused", uid: "paused"},
];

const users = [
  {
    rank: 1,
    developer: "Edmond Akwasi",
    role: "CEO",
    team: "Management",
    status: "active",
    streak: "59678",
    contributions: "23419",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    email: "edmondakwasi.reichert@example.com",
  },
  {
    rank: 2,
    developer: "Garby Rockson",
    role: "member",
    team: "Development",
    status: "paused",
    streak: "8979",
    contributions: "11107",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    email: "Garby.lang11@example.com",
  },
  {
    rank: 3,
    developer: "Scott Mount",
    role: "Devrel",
    team: "Development",
    status: "active",
    streak: "9394",
    contributions: "300",
    avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d",
    email: "Scott.fisher43@example.com",
  },
  {
    rank: 4,
    developer: "Ekow Gyepi",
    role: "CTO",
    team: "public speaking",
    status: "Active",
    streak: "7788",
    contributions: "5797",
    avatar: "https://i.pravatar.cc/150?u=a048581f4e29026701d",
    email: "Ekow.howard23@example.com",
  },
  {
    rank: 5,
    developer: "Mathew Hitler",
    role: "S. Manager",
    team: "Sales",
    status: "active",
    streak: "8689",
    contributions: "534",
    avatar: "https://i.pravatar.cc/150?u=a092581d4ef9026700d",
    email: "Mathew.cooper@example.com",
  },
  {
    rank: 6,
    developer: "Adolf hitler",
    role: "P. Manager",
    team: "Management",
    streak: "1819",
    contributions: "123567",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    email: "Adolf.kim@example.com",
    status: "Active",
  },
  {
    rank: 7,
    developer: "Iddrisu seidu",
    role: "frontend  Developer",
    team: "Design",
    status: "paused",
    streak: "1116",
    contributions: "897",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29027007d",
    email: "Iddrisu.hunt@example.com",
  },
  {
    rank: 8,
    developer: "Samantha Brooks",
    role: "HR Manager",
    team: "HR team",
    status: "active",
    streak: "5556",
    contributions: "530",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e27027008d",
    email: "samantha.brooks@example.com",
  },
  {
    rank: 9,
    developer: "Frank Harrison",
    role: "F. Manager",
    team: "operation",
    status: "Active",
    streak: "7578",
    avatar: "https://i.pravatar.cc/150?img=4",
    email: "frank.harrison@example.com",
  },
  {
    rank: 10,
    developer: "Adams olabode",
    role: "Ops Manager",
    team: "Operations",
    status: "active",
    streak: "75556",
    contributions: "49",
    avatar: "https://i.pravatar.cc/150?img=5",
    email: "adam.adams@example.com",
  },
  {
    rank: 11,
    developer: "Abraham lincon",
    role: "Sr. Dev",
    team: "Development",
    status: "active",
    streak: "9424",
    contributions: "29",
    avatar: "https://i.pravatar.cc/150?img=8",
    email: "abraham.stevens@example.com",
  },
  {
    rank: 12,
    developer: "Megan Richarjs",
    role: "sr.manager",
    team: "Product",
    status: "paused",
    streak: "1291",
    contributions: "29",
    avatar: "https://i.pravatar.cc/150?img=10",
    email: "megan.richards@example.com",
  },
  {
    rank: 13,
    developer: "Good stuff",
    role: "S. Manager",
    team: "co-worker",
    status: "active",
    streak: "4715",
    contributions: "29",
    avatar: "https://i.pravatar.cc/150?img=12",
    email: "good stuff.scott@example.com",
  },
  {
    rank: 14,
    developer: "kudus",
    role: "M. Specialist",
    team: "Marketing",
    status: "active",
    streak: "4189",
    contributions: "29",
    avatar: "https://i.pravatar.cc/150?img=16",
    email: "kudus.allen@example.com",
  },
  {
    rank: 15,
    developer: "Noah Carter",
    role: "IT Specialist",
    team: "IT.Technology",
    status: "paused",
    streak: "3517",
    contributions: "89",
    avatar: "https://i.pravatar.cc/150?img=15",
    email: "noah.carter@example.com",
  },
  {
    rank: 16,
    developer: "Elom kumah",
    role: "Manager",
    team: "Sales",
    status: "active",
    streak: "299",
    contributions: "29",
    avatar: "https://i.pravatar.cc/150?img=20",
    email: "Elom.perez@example.com",
  },
  {
    rank: 17,
    developer: "Liam Johnson",
    role: "Data Analyst",
    team: "Analysis",
    status: "active",
    streak: "2478",
    contributions: "20",
    avatar: "https://i.pravatar.cc/150?img=33",
    email: "liam.johnson@example.com",
  },
  {
    rank: 18,
    developer: "Sophia Taylor",
    role: "QA Analyst",
    team: "Testing",
    status: "active",
    streak: "32647",
    contributions: "19",
    avatar: "https://i.pravatar.cc/150?img=29",
    email: "sophia.taylor@example.com",
  },
  {
    rank: 19,
    developer: "Rockson Appiah",
    role: "Administrator",
    team: "Information Technology",
    status: "paused",
    streak: "3644",
    contributions: "2290",
    avatar: "https://i.pravatar.cc/150?img=50",
    email: "rockson.harris@example.com",
  },
  {
    rank: 20,
    developer: "Mariama Robinson",
    role: "Coordinator",
    team: "Coordination",
    status: "active",
    streak: "1105",
    contributions: "149",
    avatar: "https://i.pravatar.cc/150?img=45",
    email: "mariama.robinson@example.com",
  },
];

export {columns, users, statusOptions};
