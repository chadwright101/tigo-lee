import Button from "./_components/button";
import ContentWrapper from "./_utils/content-wrapper";

export default function Home() {
  return (
    <main>
      <ContentWrapper>
        <h1>Main heading</h1>
        <h3>Subheading</h3>
        <h3 className="font-majesty">Majesty font</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor iusto
          recusandae molestias at fuga, odio ut eveniet corrupti iure ex
          quibusdam voluptatem necessitatibus explicabo. Ratione, in? Quasi,
          laboriosam distinctio cum consectetur ut ad recusandae voluptate, ex,
          iure voluptatum animi minus nostrum sit modi consequuntur placeat
          corporis a aperiam hic nam itaque quo odit dolores voluptatem. Libero
          quod numquam itaque corporis quis. Soluta odit porro illum ipsam
          repellat illo, esse nesciunt magni, sit quisquam, ipsum sunt
          accusantium? Molestiae quod iusto dolores maxime nulla provident minus
          eum! Sapiente commodi fugiat, eveniet, minus esse officiis quia
          quibusdam blanditiis omnis voluptatibus odio veritatis non!
        </p>
        <Button>Click me</Button>
      </ContentWrapper>
    </main>
  );
}
