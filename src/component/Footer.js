import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class Footer extends Component {
    render() {
        return (
            <footer class="footer mt-auto py-3">
                <div class="container">
                    <span class="text-muted">GinRaiDee@2019</span>
                </div>
            </footer>
        )
    }
}