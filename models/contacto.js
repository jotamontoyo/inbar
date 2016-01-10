	// Definicion de modelo

	module.exports = function(sequelize, DataTypes) {			// crea la estructura de la tabla
		return sequelize.define('Contacto', { 
			nombre: {														
				type: DataTypes.STRING
			},
			alias: {														
				type: DataTypes.STRING
			},
			email: {
				type: DataTypes.STRING
			},
			emailok: {
				type: DataTypes.STRING
			},
			telefono: {
				type: DataTypes.INTEGER
			},
			marca: {														
				type: DataTypes.STRING
			},
			ciudad: {														
				type: DataTypes.STRING
			},
			provincia: {														
				type: DataTypes.STRING
			},
			comentario: {														
				type: DataTypes.STRING
			},
			lopd: {														
				type: DataTypes.BOOLEAN
			},
			revisado: {														
				type: DataTypes.BOOLEAN
			}
		})
	};