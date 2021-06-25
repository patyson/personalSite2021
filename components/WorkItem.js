const WorkItem = (props) => {
  return (
    <div class="work__item">
      <h1>{props.workTitle}</h1>
      <h2>{props.dates}</h2>
      <h3 className="work__title">{props.roleTitle}</h3>
      <h5 className="work__subtitle">{props.roleSubtitle}</h5>
      <ul>
        <li>Built new website from scratch with HTML5/CSS3/JS ES6/PHP/MySQL/ on AWS</li>
        <li>HTML5 for semantic elements, Sass for nested organized CSS3, Javascript ES6 for async functions and fetch requests</li>
        <li>Mobile responsive, ADA compliant</li>
        <li>Built custom back-end CMS to automate management between front-end and back-end. I wrote functions to autobuild JSON objects from DB to run front-end website. This minimized DB calls / server overhead and cached product catalog for fast access per user.</li>
        <li>Wrote global search function that delivered immediate results from cached JSON of product catalog with Javascript ES6</li>
        <li>Migrated legacy .NET/Syteline website to MySQL with a CSV Excel → MySQL interface</li>
        <li>Maintained versions and branching with git</li>
        <li>Managed online product catalog content updates, landing pages, built out additional interactive features based on company and user feedback</li>
      </ul>
    </div>
  )
}

export default WorkItem
