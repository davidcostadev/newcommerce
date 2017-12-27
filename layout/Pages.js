import styled from 'styled-components'

export const CategoriesPage = styled.div`
  padding-top: 15px;
  padding-bottom: 30px;
`
// export const SearchPage = CategoriesPage.extend``


// export const rowBox = styled.div`
//   margin-bottom: 15px;
// `

// export const SidebarBox = styled.div`
//   display: none;
//   @media (min-width: 992px) {
//     display: block;
//   }
// `


export const Container = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;

  @media (min-width: 576px) {
    max-width: 540px;
  }
  @media (min-width: 768px) {
    max-width: 720px;
  }
  @media (min-width: 992px) {
    max-width: 960px;
  }
  @media (min-width: 1200px) {
    max-width: 1140px;
  }
  @media (min-width: 1350px) {
    width: 1290px;
    max-width: 100%;
  }
`
