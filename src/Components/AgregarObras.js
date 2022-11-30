import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from '@mui/material/Button';
import Typography from "@mui/material/Typography";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import NavBar from "../Components/NavBar";


const AgregarObras = () => {
	const obrasAR_API = "http://localhost:3005/obrasRA"

	const [formData, setFormData] = useState({
		imageName: "",
		creationYear: "",
		author: "",
		description: "",
		type: "",
		isInExhibition: 0,
	});

	const { imageName, creationYear, author, description, type, isInExhibition } = formData;

	const onChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const [fileName, setFileName] = useState(null);

	const onChangeFile = (e) => {
		setFileName(e.target.files[0]);
	};

	const onSubmit = async (e) => {
		e.preventDefault();
		const newObraRA = { // newContact
			imageName: imageName,
			creationYear: creationYear,
			author: author,
			description: description,
			type: type,
			isInExhibition: isInExhibition,
		};
		const config = {
			headers: {
				"Content-Type": "application/json",
			},
		};
		try {
			const body = JSON.stringify(newObraRA);
			await axios.post(obrasAR_API, body, config); // Aqui se conecta con la api
			setFormData({
				imageName: "",
				creationYear: "",
				author: "",
				description: "",
				type: "",
				isInExhibition: "",
			});
			window.location.reload();
		} catch (err) {
			console.error("error", err.response.data);
		}
	};

	const [obrasRA, setObrasRA] = useState([]); // [contacts, setContacts]

	const getAllObrasAR = async () => { // getAllContacts
		const config = {
			headers: {
				"Content-Type": "application/json",
			},
		};
		try {
			const res = await axios.get(obrasAR_API, config); // contact
			setObrasRA(res.data);
		} catch (err) {
			console.error("error", err);
		}
	};

	useEffect(() => {
		getAllObrasAR();
	}, []);

	const [currentObraRA, setCurrentObraRA] = useState({}); // [currentContact, setCurrentContact]
	const [id, setId] = useState("");

	const getObraRAById = async (id) => { // getContactById 
		const config = {
			headers: {
				"Content-Type": "application/json",
			},
		};
		try {
			const res = await axios.get(`http://localhost:5000/creditCard/${id}`, config); // ocupa checarse
			setCurrentObraRA(res.data);
		} catch (err) {
			console.error("error", err);
		}
	};

	useEffect(() => {
		getObraRAById(id);
	}, [id]);

	const [open, setOpen] = useState(false);

	function handleClose() {
		setOpen(false);
	}

	function handleClickOpen() {
		setOpen(true);
	}

	const handleInputChange = (event) => {
		setCurrentObraRA({
			...currentObraRA,
			[event.target.name]: event.target.value,
		});
	};

	const handleEdit = async (id) => {
		const config = {
			headers: {
				"Content-Type": "application/json",
			},
		};

		try {
			await axios.put(
				`http://localhost:5000/creditCard/${id}`, // encesita checarse
				currentObraRA,
				config
			);
			setCurrentObraRA({
				imageName: currentObraRA.imageName,
				creationYear: currentObraRA.creationYear,
				author: currentObraRA.author,
				description: currentObraRA.description,
				type: currentObraRA.type,
				isInExhibition: currentObraRA.isInExhibition,
			});
			setOpen(false);
			window.location.reload();
		} catch (err) {
			console.error("error", err);
		}
	};

	const handleDelete = async (id) => {
		await axios.delete(`http://localhost:5000/creditCard/${id}`).then((res) => {
			const del = obrasRA.filter((obraRA) => id !== obraRA.id);
			setObrasRA(del);
			setOpen(false);
			window.location.reload();
		});
	};

	return (
		<>
    		<NavBar/>

			<form className="contact-form" onSubmit={(e) => onSubmit(e)} enctype="multipart/form-data">
				<input
					type="file"
					name="imageName"
					value={imageName}
					placeholder="Ingrese el nombre de la obra"
					onChange={(e) => onChange(e)}
					required
				></input>
				<br />
				<input
					type="text"
					name="creationYear"
					value={creationYear}
					placeholder="Ingrese el año de la obra"
					onChange={(e) => onChange(e)}
					required
				></input>
				<input
					type="text"
					name="author"
					value={author}
					placeholder="Ingrese el autor"
					onChange={(e) => onChange(e)}
					required
				></input>
				<br />
				<input
					type="text"
					name="description"
					value={description}
					placeholder="Descripcion"
					onChange={(e) => onChange(e)}
					required
				></input>
				<input
					type="text"
					name="type"
					value={type}
					placeholder="Ingrese el tipo/tecnica de la obra"
					onChange={(e) => onChange(e)}
					required
				></input>
				<br />
				<input
					type="text"
					name="isInExhibition"
					value={isInExhibition}
					placeholder="¿Está exhibida?"
					onChange={(e) => onChange(e)}
					required
				></input>
				<button type="submit"> Agregar Obra-RA</button>
			</form>

			<div className="contacts-container">
				<h1 style={{ textAlign: "center" }}> Lista de obras-RA</h1>
				<Dialog
					open={open}
					onClose={handleClose}
					aria-labelledby="form-dialog-title"
				>
					<DialogContent>
						<DialogContentText
							component={"div"}
							style={{ textAlign: "center" }}
						>
							<form className="contact-form">
								<input
									type="text"
									name="imageName"
									value={imageName}
									placeholder="Ingrese el nombre de la obra"
									onChange={(e) => onChange(e)}
									required
								></input>
								<br />
								<input
									type="text"
									name="creationYear"
									value={creationYear}
									placeholder="Ingrese el año de la obra"
									onChange={(e) => onChange(e)}
									required
								></input>
								<input
									type="text"
									name="author"
									value={author}
									placeholder="Ingrese el autor"
									onChange={(e) => onChange(e)}
									required
								></input>
								<br />
								<input
									type="text"
									name="description"
									value={description}
									placeholder="Descripcion"
									onChange={(e) => onChange(e)}
									required
								></input>
								<input
									type="text"
									name="type"
									value={type}
									placeholder="Ingrese el tipo/tecnica de la obra"
									onChange={(e) => onChange(e)}
									required
								></input>
								<br />
								<input
									type="text"
									name="isInExhibition"
									value={isInExhibition}
									placeholder="¿Está exhibida?"
									onChange={(e) => onChange(e)}
									required
								></input>

								<Button className="btn" onClick={() => handleEdit(id)}>
									<Typography className="text-primary">Save</Typography>
								</Button>
								<Button className="btn" onClick={() => handleDelete(id)}>
									<Typography className="text-primary">Delete</Typography>
								</Button>
								<Button className="btn" onClick={() => handleClose()}>
									<Typography className="text-primary">Cancel</Typography>
								</Button>
							</form>
						</DialogContentText>
					</DialogContent>
				</Dialog>
				<ul className="contact-list">
					{obrasRA.length > 0 ? (
						obrasRA.map((obraRA) => (
							<li key={obraRA._id} onClick={() => handleClickOpen()}>
								<div className="left" onClick={() => setId(obraRA._id)}>
									<p> {obraRA.name} </p>
									<p>	{obraRA.creationYear} </p>
									<p> {obraRA.author} </p>
									<p>	{obraRA.description} </p>									<p> {obraRA.name} </p>
									<p>	{obraRA.type} </p>
									<p> {obraRA.isInExhibition} </p>
									{/* <img src = "http://localhost:4000/zoom.png" width="25"></img> */}
								</div>
							</li>
						))
					) : (
						<h1 style={{ textAlign: "center", width: "90%", margin: "auto" }}>
							No credit card info found
						</h1>
					)}
				</ul>
			</div>
		</>
	);
};

export default AgregarObras;
