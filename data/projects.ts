export type Project = {
   title : string;
   location: string;
   category: string;
   
   image:string;
};

const projects: Project[] = [
   {
      title:"Modern Skyvillas",
      location: "Pali hills",
      category: "Penthouses",
      
      image:"/images/modern-skyvillas.jpg"
   },
    {
      title:"Adonia Tower",
      location: "Bandra",
      category: "Apartments",
          
      image:"/images/adonia-tower.jpg"
   },
   {
      title:"Greenwood Villas",
      location: "Seawoods",
      category: "Villas",
          
      image:"/images/greenwood-villas.jpg"
   },
   {
      title:"Willo Rows",
      location: "Palm beach",
      category: "Rowhouses",
          
      image:"/images/willo-rows.jpg"
   },
];

export default projects;