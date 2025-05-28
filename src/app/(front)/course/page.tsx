import Features05Page from "@/components/features-05/features-05";

export default async function Page() {
    const data = await fetch('https://api.codingthailand.com/api/course',{cache: 'no-store'})
    const courses = await data.json();
return (
    <main>
        courses && <Features05Page courses={courses.data}/>
    </main>
);
}