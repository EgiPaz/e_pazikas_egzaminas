import styled from 'styled-components';

export const StyledOverlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  background-color: #e3e3e3;
`;
export const StyledModalWrapper = styled.div`
  border: 2px solid #f2877d;

  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  display: flex;
  /* justify-content: center; */
  align-items: center;

  width: 700px;
  height: 65%;
  margin: 150px auto;

  border-radius: 5px;

  @media (max-width: 550px) {
    width: 100%;
  }
`;
export const StyledModalLeft = styled.div`
  background-color: #f2877d;
  height: 100%;
  width: 50%;
  border-radius: 5px 0 0 5px;

  @media (max-width: 550px) {
    display: none;
  }

  > .leftWrapper {
    padding: 1em;

    > .logoImage {
      width: 30%;
    }
    > .imageContainer {
      width: 100%;
      height: 100%;

      > img {
        width: 100%;
        height: 100%;
      }
    }
    > p {
      width: 60%;
      text-align: center;
      margin: 0 auto;
      padding-top: 10px;
      color: white;
      font-weight: bold;
      font-size: 14px;
    }
  }
`;
export const StyledModalRight = styled.div`
  background-color: #fff;
  height: 100%;
  width: 50%;

  padding: 2em;
  border-radius: 0 5px 5px 0;

  @media (max-width: 550px) {
    width: 100%;
  }

  > .getStarted {
    > h2 {
      font-size: 26px;
      margin-bottom: 7px;
    }
    > p {
      font-size: 12px;
    }
    > a {
      font-size: 12px;
      text-decoration: none;
      color: #f48e85;
      font-weight: bold;
    }
  }

  > .socialButtons {
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 1em;
    padding: 1em 0;

    > button {
      width: 50%;
      box-shadow: 1px 1px 2px #d8d8d8;

      &:hover {
        opacity: 0.8;
      }
    }
  }
  > .or {
    > p {
      text-align: center;
      font-size: 20px;
    }
  }
  > form {
    > button {
      margin-top: 10px;
    }
  }
`;
