import config from "../../config.json"
import styled from "styled-components"

const StyledHeader = styled.div`
    img{
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }
    .user-info{
        display: flex;
        align-items: center;
        width: 100%;
        padding: 16px 32px;
        gap: 16px;
    }
`;

function Header() {
    return <StyledHeader>
        {/* <img src="banner"></img> */}
        <section className="user-info">
            <img src={`https://github.com/${config.github}`} />
            <div>
                <h2>
                    {config.name}
                </h2>
                <p>
                    {config.job}
                </p>
            </div>
        </section>
    </StyledHeader>
}

export default Header