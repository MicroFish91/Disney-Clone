import React from "react";

interface ContentWrapperProps {
  Wrapper: React.ComponentType<any>;
  Content: React.ComponentType<any>;
}

const ContentWrapper: React.FC<ContentWrapperProps> = ({
  Wrapper,
  Content,
}) => {
  return (
    <>
      <Wrapper>
        <Content />
      </Wrapper>
    </>
  );
};

export default ContentWrapper;
