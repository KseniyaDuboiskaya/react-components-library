import { PageProps } from "./types";
import { Container } from "./styles";

const Page = ({ title, children }: PageProps) => {
    return (
        <Container>
            <h1>{title} - test</h1>
            {children}
        </Container>
    )
}

export default Page;