import styled from "styled-components"

const Label = styled.label`
display: block;`
const Input = styled.input`
display:block;
width:100%;
padding:.5em;
font-size:1em;
border-radius:3px; 
border:none;
outline:none;
box-shadow:0px 0px 3px lightgray;
margin-bottom:1em;
background:whitesmoke;`
const H1 = styled.h1`
`

const Modal = () => {
  return (
    <>
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
  WE NEED TREES
</button>

<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <H1 class="modal-title fs-5 text-center" id="staticBackdropLabel">TREE REQUEST</H1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
              <Label>First Name:</Label><Input type="text" />
              <Label>Last Name:</Label><Input type="text" />
              <Label>County:</Label><Input type="text" />
              <Label>Constituency:</Label><Input type="text" />
              <Label>Ward:</Label><Input type="text" />
              <Label>Landmark:</Label><Input type="text" />
              <Label>Soil type:</Label><Input type="text"/>

            </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-success">Submit</button>
      </div>
    </div>
  </div>
</div>
    </>
  )
}
export default Modal
